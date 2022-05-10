import Sequelize from 'sequelize'
import dotenv from 'dotenv'


dotenv.config()

export const connection = new Sequelize(
    process.env.DATABASE.URL,
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)

