import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'


export const roupas = connection.define('roupas', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true

    },
    nome_roupa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tamanho: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preço:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false,
    timestamps: false
})



