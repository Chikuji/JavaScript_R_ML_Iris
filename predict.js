var R = require("r-script");

function classifica(req, res) {
    // Abre o corpo da requisição e busca pelos nomes dentro do objeto
    var flor = { sepal_length, sepal_width, petal_length, petal_width } = req.body;

    // Carrega o script com os dados do objeto flor
    var result = R("script_r/iris_predict.R").data(flor);

    // Verifica se foi passada uma resposta (caso seja utilizada em uma rota)
    if (res != null) {
        result.call(
            function(erro, script_response) {
                if (erro) throw erro;
                res.send({ especie: script_response });
                res.end();
            })
    } else {
        return result;
    }
}

module.exports = { classifica }

// Verifica se o script está sendo executado diretamente ou importado
// Se o script for importado, não executa o código abaixo
if (require.main === module){

    var requisicao = 
    { 
        body: {
            sepal_length: 5.7,
            sepal_width: 2.8,
            petal_length: 4.1,
            petal_width: 1.3
        }
    };

    classifica(requisicao)
        .call(function(erro, data) {
            if (erro) throw erro;
            console.log(data);
        });
}