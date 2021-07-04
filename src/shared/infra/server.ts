import 'reflect-metadata'
import cors from 'cors'
import express from 'express'

import routes from './routes'

import AppError from '@shared/errors/AppError'
import errorHandler from '@shared/errors/errorHandler'

import './typeorm'
import '../container'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use(errorHandler)

app.listen(3333, ()=>{
    console.log('server started on port 3333')
})