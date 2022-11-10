const express = require('express');

const categoria = require('../model/Categoria');

/** CONFIGURAÇÃO DAS ROTAS **/
const router = express.Router();

/** DEFINIÇÃO DAS ROTAS **/

/* ROTA DE INSERÇÃO DE CATEGORIA (VERBO HTTP: POST) */
/*
Métodos do verbo da rota:
1º - A rota em si
2º - A ação que a rota deve executar (arrow function)
*/
router.post('/categoria/cadastrarCategoria', (req, res)=>{

        let { nome_categoria } = req.body;

        categoria.create(
            {nome_categoria}
        ).then(
            ()=>{
                return res.status(201).json({
                    erroStatus:false,
                    mensagemStatus:'Categoria inserida com sucesso.'
                });
            }
        ).catch((erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });
    }
);
/* ROTA DE LISTAGEM GERAL DE CATEGORIA (VERBO HTTP: GET)*/
router.get('/categoria/listarCategoria', (req, res)=>{
        //{order:['id', 'DESC']}
        categoria.findAll()
                .then(
                    (categorias)=>{
                        return res.status(200).json(categorias);
                    }
                ).catch((erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMensagem: erro
                    });
                });
    }
);

/* ROTA DE LISTAGEM POR ID DE CATEGORIA (VERBO HTTP: GET)*/
router.get('/categoria/listarCategoria/:id', (req, res)=>{

    let {id} = req.params;

    categoria.findByPk(id)
            .then(
                (categoria)=>{
                    return res.status(200).send(categoria);
                }
            ).catch((erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMensagem: erro
                });
            });
});

/* ROTA DE ALTERAÇÃO DE CATEGORIA (VERBO HTTP: PUT)*/
router.put('/categoria/alterarCategoria', (req, res)=>{

        let {id, nome_categoria} = req.body;

        categoria.update(
                {nome_categoria},
                {where: {id}}
        ).then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:'Categoria alterada com sucesso.'
                });
            }
        ).catch((erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });
    }
);
/* ROTA DE EXCLUSÃO DE CATEGORIA (VERBO HTTP: DELETE)*/
router.delete('/categoria/excluirCategoria/:id', (req, res)=>{

        let {id} = req.params;

        categoria.destroy(
            {where: {id}}
        ).then(
            ()=>{
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:'Categoria excluída com sucesso.'
                });
            }).catch((erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });
    }
);

module.exports = router;