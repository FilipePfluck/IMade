import ICreateClientDto from "./ICreateClientDto";
import Client from "../infra/typeorm/entities/client";

export default interface IClientRepository {
    create(data: ICreateClientDto): Promise<Client> 
    save(data: Client): Promise<Client>
    find(): Promise<Client[]>
    findById(id: string): Promise<Client | undefined>
    delete(id: string): Promise<void>
}