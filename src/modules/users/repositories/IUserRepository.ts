import ICreateUserDto from "../dtos/ICreateUserDto";
import User from "../infra/typeorm/entities/user";

export default interface IUserRepository {
    create(data: ICreateUserDto): Promise<User> 
}