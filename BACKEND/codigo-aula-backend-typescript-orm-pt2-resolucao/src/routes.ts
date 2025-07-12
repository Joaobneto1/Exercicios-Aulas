import { Request, Response, Router } from 'express'
import { UserController } from './controllers/UserController'
import { addressRepository } from './repositories/addressRepository'
import { roleRepository } from './repositories/roleRepository'
import { userRepository } from './repositories/userRepository'

const routes = Router()

routes.get('/', async (req: Request, res: Response) => {
	const guido = await userRepository.findOne({
		where: { email: 'guido@email.com' },
		relations: {
			addresses: true,
			roles: true,
		},
	})

	const address = await addressRepository.find({
		relations: {
			user: true,
		},
	})

	const roles = await roleRepository.find({
		relations: {
			users: true,
		},
	})

	return res.json(guido)
})

routes.post('/usuarios', new UserController().store)

export default routes
