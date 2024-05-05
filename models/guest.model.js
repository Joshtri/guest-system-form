import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Guest = sequelize.define('guest', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    tableName: 'guests',
    timestamps: true
});

export default Guest;
