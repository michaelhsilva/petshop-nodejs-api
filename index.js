const customexpress = require('./config/customexpress');
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {
    if (erro) {
        console.log(erro);
    } else {
        console.log('conectado com sucesso ao banco de dados');

        Tabelas.init(conexao);

        const app = customexpress();

        app.listen(3000, () => console.log('escutando na porta 3000'));
    }
});


