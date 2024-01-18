import express from 'express';
import connectToDB from './config/dbConnect.js';
import livro from './models/Livro.js'

const app = express()

const connection = await connectToDB()

connection.on('error', err => {
    console.log("🚀 | Erro de conexão: ", err)
})

connection.once('open', () => {
    console.log("🚀 | Conectado ao banco com sucesso!")
})


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Cuso de NODE JS')
})

app.get('/livros', async (req, res) => {
    const listaLivros = await livro.find({})
    res.status(200).json(listaLivros)
})

app.get('/livros/:id', (req, res) => {
    /* const index = getLivro(req.params.id) */
    /* res.status(200).json(livros[index]) */
})

app.post('/livros', (req, res) => {
    /* livros.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso') */
})

app.put('/livros/:id', (req, res) => {
    /* const index = getLivro(req.params.id) */
    /* livros[index].title = req.body.title
    res.status(200).json(livros) */
})

app.delete('/livros/:id', (req, res) => {
    /* const index = getLivro(req.params.id) */
    /* let title = livros[index].title
    livros.splice(index, 1)
    res.status(200).send(`${title} deletado com sucesso`) */
})
export default app