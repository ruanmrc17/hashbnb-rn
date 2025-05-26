import 'dotenv/config'
import express from 'express'
import UserRoutes from './domains/users/routes.js'
import cors from 'cors'


// middleware é uma função que é ativada no meio do caminho

const app = express()
const { PORT } = process.env

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use("/users", UserRoutes)


app.listen(PORT, () => {
    console.log('Servidor está rodando na porta ' + PORT)
})


































