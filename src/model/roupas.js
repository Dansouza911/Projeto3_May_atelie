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
        type: Sequelize.INTEGER,
        allowNull: false
    },
    link:{
        type:Sequelize.STRING
    }
}, {
    freezeTableName: true,
    createdAt: false, 
    updatedAt: false,
    timestamps: false
})

const initTable = async () => {
    try {
        await roupas.sync()
    }
    catch(error){
        return error.message
    }
}

initTable()



