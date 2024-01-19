import "dotenv/config"
import app from './src/app.js'

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`💻 Servidor iniciado na porta ${PORT}`);

})