import express from 'express';
import connectToDB from './config/dbConnect.js';
import routes from './routes/index.js';

const app = express()
routes(app)
const connection = await connectToDB()

connection.on('error', err => {
    console.log("❌ Erro de conexão: ")
})

connection.once('open', () => {
    console.log("🌎 Conectado ao banco com sucesso ✅")
})


export default app