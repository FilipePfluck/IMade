import ICreateUserDto from "./ICreateUserDto";
import User from "../infra/typeorm/entities/user";

export default interface IUserRepository {
    create(data: ICreateUserDto): Promise<User> 
    save(user: User): Promise<User>
    find(): Promise<User[]>
    findById(id: string): Promise<User | undefined>
    findByEmail(email: string): Promise<User | undefined>
}