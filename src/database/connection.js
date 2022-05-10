import Sequelize from 'sequelize'
import dotenv from 'dotenv'


dotenv.config()

export const connection = new Sequelize(
    'postgres://roupas_user:XQcrEzeFBXN98pUiaiadXou71747rUWq@dpg-c9qstrc41lsbneedgod0-a.oregon-postgres.render.com/roupas',
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

