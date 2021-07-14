const Funcionario = require('../model/homeModel')
exports.index = (req, res) => {
    res.render('cadastro');
    return
};

exports.register = (req, res) =>{
    const artigo = Funcionario.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi cadastrado com sucesso!"
        });
        return res.status(200).render('/')
    });
}