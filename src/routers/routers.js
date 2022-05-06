import express from "express"

import { getAll } from "../controller/Controllador.js"
import { roupas } from "../model/roupas.js";
import { getDetalhes } from "../controller/Controllador.js";
import { signup } from "../controller/Controllador.js";
import { contato } from "../controller/Controllador.js";

export const routers = express.Router()

const app = express();

routers.get('/', getAll)
routers.get('/detalhes/:id', getDetalhes)
routers.get('/signup', signup)
routers.get('/contato', contato)


