const mongoose = require('mongoose');

mongoose.connect('mongorestore --uri mongodb+srv://adm:adm@adm.cms9h.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

const HomeSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: String, required: true },
  cargo: { type: String, required: true },
  CriadoEm: {type: Date, default: Date.now},
  descricao: String
});



const HomeModel = mongoose.model('cadastro', HomeSchema);

const Contato = (body) =>{
  this.body = body;
  this.errors = [];
  this.contato = null;
}

mongoose.model('funcionario', HomeSchema)