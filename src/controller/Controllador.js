import { connection } from "../database/connection.js";
import { roupas } from "../model/roupas.js";



export const getAll = async (req, res) => {
  try {
   
    const catalogo = await roupas.findAll({
      order: [["id", "ASC"]],
    });
    res.render("index.ejs", { catalogo, roupaAtualPut: null, roupaAtualDel: null, });
  } catch (err) {
    res.send({ err: err.message });
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const roupaDetalhes = await roupas.findByPk(req.params.id);
    console.log(roupaDetalhes);

    res.render("detalhes.ejs", {
      roupaDetalhes,
    });
  } catch (err) {
    res.send({ err: err.message });
  }
};

export const signup = (req, res) => {
  try {
    res.render("signup.ejs", {toggle:false},);
  } catch (err){
    res.send({ err: err.message });
  }
};

export const contato = (req, res) => {
  try {
    res.render("contato.ejs");
  } catch {
    res.send({ err: err.message });
  }
};

export const getDeletar = async (req, res) => {
  try {
    await roupas.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};

export const postCriar = async (req, res) => {
  const { nome_roupa, img, tamanho, preço, link } = req.body;
  console.log(req.body);
  try {
    
    /*   await connection.query(`INSERT INTO roupas (nome_roupa, img, tamanho, preço, link) VALUES('${nome_roupa}', '${img}', '${tamanho}', '${preço}','${link}' ) `) */
    if (!nome_roupa || !img || !tamanho || !preço || !link) {
   
      return res.redirect("/signup");
    } else {
      await roupas.create({ nome_roupa, img, tamanho, preço, link });
    
    res.render("signup.ejs", {toggle:true});
    }
    
  } catch (error) {
    res.send(error.message);
  }
};

export const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const catalogo = await roupas.findAll();
    const roupaAtual = await roupas.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        catalogo,
        roupaAtualPut: roupaAtual,
        roupaAtualDel: null,
        
      });
    } else {
      res.render("index", {
        catalogo,
        roupaAtualPut: null,
        roupaAtualDel: roupaAtual,
        
      });
    }

    res.render("editar.ejs", {
      roupaAtual,
    });
  } catch (error) {
    res.send(error.message);
  }
};
export const update = async (req, res) => {
  try {
    /* const { nome_roupa, img, tamanho, preço, link } = req.body; */
    const roupas_update = req.body;
    await roupas.update( roupas_update,
     /*  {
        nome_roupa: nome_roupa,
        img: img,
        tamanho: tamanho,
        preço: preço,
        link: link,
      }, */
      {
        where: {
          id: req.params.id
        },
      }
    );
  
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};




