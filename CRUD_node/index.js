// criando uma app express
const express = require('express');
const app = express();

// configurando marko
require('marko/node-require');
var markoExpress = require("marko/express");
app.use(markoExpress());

// configurando bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded())

// criando dao
const AlunoDao = require('./dao/aluno-dao');
const dao = new AlunoDao();

// configurando mensagens flash
const session = require('express-session');
const flash = require('connect-flash');
app.use(session({
    secret: 'geeks',
    saveUnitialized: true,
    resave: true
}));
app.use(flash());

// implementandos rotas...
app.get('/', function (req, res) {

    let response = {
        error_messages: req.flash('error'),
        success_messages: req.flash('success'),
        results: []
    }
    console.log(response);
    dao.list().then((results) => {

        response.results = results;
        res.marko(require('./templates/alunos.marko'), response);
    }).catch((err) => {
        console.log(err);
        response.error_messages.push('Ocorreu um erro no servidor');
        res.marko(require('./templates/alunos.marko'), response);
    });
    
});

app.get('/form', function (req, res) {
    res.marko(
     require('./templates/form.marko')
        );
});

app.get('/form/:id', function (req, res) {
    dao.findById(req.params.id).then((result) => {
        if (result.length > 0) {
            aluno = result[0]
            res.marko(require('./templates/form.marko'), aluno);
        } else {
            req.flash('error', 'Não foi encontrado o aluno com o id = '+ req.params.id);
            res.redirect('/');
        }
    }).catch ((err) => {
        console.log(err);
        req.flash('error', 'Ocorreu um erro ao buscar o aluno de id = ' + req.params.id);
        res.redirect('/');

    });

});

app.get('/alunos/delete/:id', function (req, res) {
    dao.delete(req.params.id).then( (result) => {
        req.flash('success','Usuario removido com sucesso')   
        res.redirect('/');
    }).catch( (err) => {
        console.long(err);
        req.flash('error','Ocorreu um erro ao remover o usuario')   
        res.redirect('/');
    });


});

app.post('/alunos', function(req, res) {
   if (req.body.id){
      dao.update(req.body).then((result) => {
        req.flash('success','Dados do aluno atualizados com sucesso!')   
        res.redirect('/');
      }).catch((err) => {
          console.log(err);
          req.flash('error','ocorreu um erro ao atualizar os dados do aluno!')
      })
   }else{
        dao.save(req.body).then((results) => {
            req.flash('success','Aluno salvo com sucesso!')
            res.redirect('/');
        }).catch((err) => {
            console.lof(err);
            req.flash('error','ocorreu um erro ao salvar os dados do aluno!')
            res.redirect('/');
        });
   }
});


app.listen(3000, '0.0.0.0', function() {
    console.log('Servidor Iniciado');
});