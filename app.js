const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question("Deseja buscar um livro? ( S / N ) ")

if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log('\nEstas são as categorias disponíveis: \n')
    console.log('   Produtividade / História brasileira / Américas / Tecnologia / Estilo de vida \n')

    const entradaCategoria = readline.question("Qual categoria deseja escolher? ")
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    console.table(retorno)

} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log('Estes são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}