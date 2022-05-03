
import { connection } from '../database/connection.js'
import { roupas } from '../model/roupas.js'


export const getIndex = async (req,res)=> {
const catalogo = await connection.query ('SELECT * FROM roupas', {
    model: roupas
})
console.log(catalogo);
    res.render('index.ejs')
}


