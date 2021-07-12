const livros = require('./database')

//pegar o input 
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')
//SE FOR SIM, MOSTRAR AS CATEGORIAS DISPONÍVEIS, PERGUNTA QUAL CATEGORIA ELA ESCOLHE
// SE FOR NÃO, MOSTRA TODOS OS LIVROS EM ORDEM CRESCENTE PELA QUANTIDADE DE PÁGINAS
if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis:')
    console.log('Produtividade', '/ Romance', '/ autoajuda', '/ Tecnologia', '/ Filosofia')

    const entradaCategoria = readline.question('Qual categoria voce escolhe? ')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}else{
   const livrosOrdenados =  livros.sort((a,b)=>a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis')
    console.table(livrosOrdenados )
}