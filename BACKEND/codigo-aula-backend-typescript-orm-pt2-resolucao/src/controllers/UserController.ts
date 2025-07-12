import { Request, Response } from 'express'
import { addressRepository } from '../repositories/addressRepository'
import { userRepository } from '../repositories/userRepository'

export class UserController {
	async store(req: Request, res: Response) {
		const { name, email, password, addresses } = req.body

		const newUser = userRepository.create({ name, email, password })
		await userRepository.save(newUser)

		for (const address of addresses) {
			const newAddress = addressRepository.create({ ...address, user: newUser })
			await addressRepository.save(newAddress)
		}

		return res.status(201).json({ ...newUser })
	}
}
