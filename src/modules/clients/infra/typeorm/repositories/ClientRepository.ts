import ICreateClientDto from "@modules/clients/interfaces/ICreateClientDto";
import IClientRepository from "@modules/clients/interfaces/IClientRepository";
import { getRepository, Repository } from "typeorm";
import Client from "../entities/client";

export default class ClientRepository implements IClientRepository {
    private ormRepository: Repository<Client>

    constructor(){
        this.ormRepository = getRepository(Client)
    }

    public async create(data: ICreateClientDto){
        const client = this.ormRepository.create(data)

        await this.ormRepository.save(client)

        return client
    }

    public async find(){
        const clients = await this.ormRepository.find()

        return clients
    }

    public async findById(id: string){
        const client = await this.ormRepository.findOne(id)

        return client
    }

    public async save(data: Client){
        const client = await this.ormRepository.save(data)

        return client
    }

    public async delete(id: string){
        await this.ormRepository.delete(id)
    }

    public async findByUserId(user_id: string){
        const client = await this.ormRepository.findOne({
            where: {
                user_id
            }
        })

        return client
    }
}