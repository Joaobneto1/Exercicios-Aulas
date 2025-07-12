import {
	Column,
	Entity,
	ManyToMany,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Address } from './Address'
import { Role } from './Role'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ nullable: true })
	name: string

	@Column({ unique: true })
	email: string

	@Column()
	password: string

	// @OneToOne(() => Address, address => address.user)
	@OneToMany(() => Address, address => address.user)
	addresses: Address[]

	@ManyToMany(() => Role, role => role.users)
	roles: Role[]

	// Método personalizado usando Active Record
	// É necessário extender a classe BaseEntity

	// static async findByName(name: string) {
	// 	return this.find({ where: { name } })
	// }
}
