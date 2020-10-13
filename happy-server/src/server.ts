import express from 'express'
import cors from 'cors'
import './database/connection'
import ApiRoutes from './routes'

const app = express()
app.use(express.json())
app.use(cors())
app.use(ApiRoutes)
app.listen(3333, () => console.log('RODANDO...'))