import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { ApiError } from './ApiError'
import { BadRequestError } from './BadRequestError'
import { NotFoundError } from './NotFoundError'

const app = express()

app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
    const { nome, idade } = req.body

    if (!nome) {
        // return res.status(400).json({ message: 'O campo nome é obrigatório' })
        throw new BadRequestError('O campo nome é obrigatório')
    }

    if (!idade) {
        throw new NotFoundError('Idade não encontrada.')
    }

    return res.json(`Tudo certo ${nome}`)
})

// catch all
app.use((err: Error & Partial<ApiError>, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode ?? 500
    return res.status(statusCode).json({ message: err.message })
})

app.listen(3000)