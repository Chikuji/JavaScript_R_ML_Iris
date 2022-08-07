// Descomente as outras flores para comparar a classificação

// Biblioteca r-cript
var classificacao = require("r-script")

// // Dados do treinamento  5.0         3.6          1.4         0.2     setosa
// // Dados de teste:
// var flor = {
//     sepal_length: 4.8,
//     sepal_width: 3.2,
//     petal_length: 1.1,
//     petal_width: 0.6
// }

// // Dados do treinamento  5.2         2.7          3.9         1.4 versicolor
// // Dados de teste:
// var flor = {
//     sepal_length: 5.8,
//     sepal_width: 2.2,
//     petal_length: 3.1,
//     petal_width: 1.6
// }

// Dados do treinamento 6.4         3.1          5.5         1.8  virginica
// Dados de teste:
var flor = {
    sepal_length: 6.8,
    sepal_width: 3.2,
    petal_length: 5.7,
    petal_width: 2.6
}

classificacao("script_r/iris_predict.R").data(flor)
    .call(function(erro, data) {
        if (erro) throw erro;
        console.log(data);
    });