import { DataTypes, Model } from 'sequelize';
import config from '../DataBase/DBConfig.js';

class User extends Model { }

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: config,
    modelName: 'users',
    timestamps: false
});

export default User;