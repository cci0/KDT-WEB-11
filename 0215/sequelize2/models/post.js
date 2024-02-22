const { DataTypes } = require('sequelize');

const PostModel = (sequelize) => {
    return sequelize.define('post', {
        // 칼럼 정의
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, // not null
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        content: DataTypes.TEXT('medium'),
        // content: DataTypes.STRING(1000),도 사용가능
    });
};

module.exports = PostModel;
