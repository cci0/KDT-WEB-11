const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const PORT = 8000;

// http 서버
const server = http.createServer(app);
// socket 서버
const io = socketIo(server);

// 미들웨어
app.set('view engine', 'ejs');

// 라우터
app.get('/', (req, res) => {
    res.render('client');
});

// 사용자 정보 갱신 함수
function getUserList(room) {
    // room에 접속한 모든 사용자
    const users = [];
    // room은 접속한 룸 id
    // 채팅룸에 접속한 socket.id 값을 찾아야 함
    const clients = io.sockets.adapter.rooms.get(room);
    // console.log('clients', clients);
    if (clients) {
        clients.forEach((client) => {
            console.log(client);
            // io.sockets.sockets: socket.id가 할당한 변수들의 객체값
            const userSocket = io.sockets.sockets.get(client);
            console.log('userSocket', userSocket);
            const info = { userName: userSocket.userName, key: client };
            users.push(info);
        });
    }
    return users;
}

const roomList = []; // 채팅방 목록 갱신을 위한

// 소켓 서버
io.on('connection', (socket) => {
    // socket: 접속한 웹브라우저
    // io: 접속해있는 모든 웹브라우저
    // 웹브라우저가 접속이 되면 고유한 id 값이 생성된다. socket.id로 확인 가능하다
    // console.log(socket.id);

    // 채팅방 만들기
    socket.on('create', (res, cb) => {
        // join(방이름): 해당 방 이름이 없으면 생성. 존재하면 입장
        console.log(res);
        socket.join(res.roomName);
        console.log('방생성 후', socket.rooms);

        // socket 객체 안에 원하는 값을 할당
        socket.roomName = res.roomName;
        socket.userName = res.userName;

        // 나를 제외한 모든 방 사람들에게 입장 메세지 전달
        socket.broadcast.to(res.roomName).emit('notice', `${socket.id}님이 입장하셨습니다`);
        cb();
        // socket.to(res.roomName).emit('notice', `${socket.id}님이 입장하셨습니다`); broadcast가 없어도 괜찮긴하다.

        // 채팅방 목록 갱신
        if (!roomList.includes(res.roomName)) {
            roomList.push(res.roomName);
            // 갱신된 목록은 전체(모든 사용자)가 다 봐야함
            io.emit('roomList', roomList);
        }

        // 사용자 정보 갱신
        const userList = getUserList(res.roomName);
        io.to(res.roomName).emit('userList', userList);
    });

    // 메세지
    socket.on('sendMessage', (res) => {
        console.log(res);
        const { message, user, select } = res;
        if (select === 'all') {
            // 특정 방에 전체 사용자에게 메세지 보내기
            io.to(socket.roomName).emit('newMessage', { message, user, dm: false });
        } else {
            io.to(select).emit('newMessage', { message, user, dm: true });
            // 자기 자신에게도 메세지 보내기
            socket.emit('newMessage', { message, user, dm: true });
        }
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:8000`);
});
