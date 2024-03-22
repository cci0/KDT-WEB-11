import { useState } from 'react';

export default function Alphabet() {
  const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [alphabet2, setAlphabet2] = useState([
    {
      id: 1,
      alpha: 'k',
    },
    {
      id: 2,
      alpha: 'i',
    },
    {
      id: 3,
      alpha: 'w',
    },
    {
      id: 4,
      alpha: 'i',
    },
  ]);

  const [inputAlpha, setInputAlpha] = useState('');
  const [alpha, setAlpha] = useState([]); // 단축평가용
  // const alphabets = alphabet.map((txt, id, arr) => {
  //   console.log('txt', txt);
  //   console.log('id', id);
  //   console.log('arr', arr);
  //   return txt + id;
  // });

  // console.log(alphabets);

  const addAlpha = () => {
    // [퀴즈] input이 빈값이라면 alphabet2 상태가 변경되지 않도록 하기
    if (inputAlpha.trim().length === 0) return;

    // alphabet2 에 inputAlpha 내용 추가
    const newAlpha = alphabet2.concat({
      id: alphabet2.length + 1,
      alpha: inputAlpha,
    });
    setAlphabet2(newAlpha);
    setInputAlpha('');
  };

  const handleKeyDown = (e) => {
    // [퀴즈] 엔터 입력하면 추가되도록
    // console.log(e);

    // bug fix: IME 문제 해결 (한글 마지막 한글자가 더 나옴)
    if (e.nativeEvent.isComposing) {
      return;
    }

    // key, keyCode, code 등등

    // if(e.code === 'Enter') addAlpha();
    if (e.keyCode === 13) addAlpha();
  };

  const deleteAlpha = (id) => {
    console.log(id);

    const newAlpha = alphabet2.filter((alpha) => {
      return alpha.id !== id;
    });
    setAlphabet2(newAlpha);
  };
  return (
    <div>
      <ol>
        {/* {alphabet.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })}
        {alphabet.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))} */}
        {alphabet2.map((value) => {
          return (
            <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
              {value.alpha}
            </li>
          );
        })}
      </ol>

      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={addAlpha}>Add</button>
      <br />
      {/* 단축 평가 */}
      {alpha.length === 0 && <span>알파벳을 입력해주세요!</span>}
      <br />
      {'exist' || <span>정의된 값이 없어요!</span>}
      <br />
      {null || <span>정의된 값이 없어요!</span>}
    </div>
  );
}
