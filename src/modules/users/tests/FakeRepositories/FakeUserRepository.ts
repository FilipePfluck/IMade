import { uuid }  from 'uuidv4'

import IusersRepository from '@modules/users/interfaces/IUserRepository'
import ICreateuserDTO from '@modules/users/interfaces/ICreateUserDto'

import User from '../../infra/typeorm/entities/user'

class FakeUsersRepository 
    implements IusersRepository{
        private users: User[] = []

        public async find(): Promise<User[]>{
            return this.users
        }

        public async findById(Id: string): Promise<User | undefined> {
            const findUser = this.users.find(user => user.id === Id)

            return findUser
        }

        public async findByEmail(Email: string): Promise<User | undefined> {
            const findUser = this.users.find(user => user.email === Email)

            return findUser
        }

        public async create({ name, email, password }: ICreateuserDTO): Promise<User>{
            const user = new User()

            Object.assign(user, { id: uuid(), name, email, password })

            this.users.push(user)

            return user
        }

        public async save(user: User): Promise<User>{
            const findIndex = this.users.findIndex(findUser => findUser.id === user.id)

            this.users[findIndex] = user

            return user
        }
    }

export default FakeUsersRepository