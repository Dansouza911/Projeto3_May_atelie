import express from "express"

import { 
    getAll,
    getDeletar,
    getDetalhes,
    signup,
    contato,
    postCriar,
    getById,
    update

} from "../controller/Controllador.js"
import { roupas } from "../model/roupas.js";


export const routers = express.Router()



routers.get('/', getAll)

routers.get('/detalhes/:id', getDetalhes)

routers.get('/signup', signup)
routers.post('/signup', postCriar)

routers.get('/contato', contato)

routers.get('/deletar/:id', getDeletar)

routers.get('/getById/:id/:method', getById)
routers.post('/update/:id', update)

 