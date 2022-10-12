const AlunoRouter = require('express').Router();
const Aluno = require('../model/Aluno');

AlunoRouter.get('/alunoall', async (req, res) => {
    try {
        const result = await Aluno.find({});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Ocorreu um erro durante a busca'});
    }
});

AlunoRouter.get('/alunoid', async (req, res) => {
    try {
        const result = await Aluno.findOne({email: req.params.email});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Ocorreu um erro durante a busca'});
    }
});

AlunoRouter.delete('/aluno', async (req, res) => {
    try {
        await Aluno.deleteOne({email: req.body.email});
        res.json({mensagem: 'Aluno excluído'}); 
    } catch (error) {
        res.json({mensagem: 'Erro na exclusão'});
    }
});

module.exports = AlunoRouter;
