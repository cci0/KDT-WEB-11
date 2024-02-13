const { DataTypes } = require('sequelize');

const MemberModel = (sequelize) => {
    const User = sequelize.define(
        'member',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false, // NOT NULL
                primaryKey: true,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
        },
        {
            tableName: 'member',
            freezeTableName: true,
            timdstamps: false,
        }
    );

    return User;
};

module.exports = MemberModel;
