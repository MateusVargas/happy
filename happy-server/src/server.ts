import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import './database/connection'

import ApiRoutes from './routes'
import path from 'path'
import errorHandler from './errors/handler'

const app = express()
app.use(express.json())
app.use(cors())//em produção: passa-se um objeto com as origens permitidas
app.use(ApiRoutes)
app.use('/uploads', express.static(path.join(__dirname,'..','uploads')))
app.use(errorHandler)

app.listen(3333, () => console.log('RODANDO...'))