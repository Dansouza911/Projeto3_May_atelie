

import { connection } from '../database/connection.js'
import { roupas } from '../model/roupas.js'


export const getAll  = async (req,res)=> {
    try{
        const catalogo = await roupas.findAll() ; 
        res.render('index.ejs', {catalogo} )

    } catch (err) {
        res.status(500).send({err: err.message})
    }

}

export const getDetalhes = async (req, res)=> {
try {
    const roupaDetalhes = await roupas.findByPk(req.params.id)
console.log(roupaDetalhes);
   
    res.render('detalhes.ejs', {
        roupaDetalhes
    })
}
catch (err){
    res.status(500).send({err: err.message})
}
}


export const signup = (req, res) => {
    try {
res.render('signup.ejs')
    }
    catch{
        res.status(500).send({err: err.message})
    }
}

export const contato = (req, res) => {
    try {
res.render('contato.ejs')
    }
    catch{
        res.status(500).send({err: err.message})
    }
}
