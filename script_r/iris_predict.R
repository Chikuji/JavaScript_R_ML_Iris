# Esse script faz as classificações com uso do modelo preditivo
# Biblioteca do R compatível com o JS
needs("caret")

# Avalia uma variável
attach((input[[1]]))

# Carrrega o modelo
modelo_preditivo <- readRDS("modelo/model.rds")

# Monta o dataframe com os dados recebidor do JS
dados <- data.frame(sepal_length, sepal_width, petal_length, petal_width)

# Renomeia o nome das variáveis
names(dados) <- c("Sepal.Length", "Sepal.Width", "Petal.Length", "Petal.Width")

# Retorna a predição
predict(modelo_preditivo, dados)