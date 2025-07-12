import { Request, Response, Router } from 'express'
import { AppDataSource } from './data-source'
import { User } from './entities/User'

const routes = Router()

routes.get('/', async (req: Request, res: Response) => {
	// Active Record

	// criar um usuário
	// const user = new User()
	// user.name = 'Guido 2'
	// user.email = 'guido2@email.com'
	// user.password = '12345'
	// user.save()

	//listar usuarios
	// const users = await User.find()
	// const users = await User.find({ where: { email: 'guido@email.com' } })

	// Data Mapper - repository pattern
	const userRepository = AppDataSource.getRepository(User)

	const guido = await userRepository.findOne({
		where: { email: 'guido@email.com' },
	})

	const newUser = userRepository.create({
		name: 'Ana 2',
		email: 'ana2@email.com',
		password: '1234',
	})

	await userRepository.save(newUser)

	const users = await userRepository.find()

	// console.log(newUser)

	return res.json({ users, guido })
})

export default routes
