import ICreateProviderDto from "@modules/providers/interfaces/ICreateProviderDto";
import IProviderRepository from "@modules/providers/interfaces/IProviderRepository";
import { getRepository, Repository } from "typeorm";
import Provider from "../entities/provider";

export default class ProviderRepository implements IProviderRepository {
    private ormRepository: Repository<Provider>

    constructor(){
        this.ormRepository = getRepository(Provider)
    }

    public async create(data: ICreateProviderDto){
        const provider = this.ormRepository.create(data)

        await this.ormRepository.save(provider)

        return provider
    }

    public async find(){
        const providers = await this.ormRepository.find()

        return providers
    }

    public async findById(id: string){
        const provider = await this.ormRepository.findOne(id)

        return provider
    }

    public async save(data: Provider){
        const provider = await this.ormRepository.save(data)

        return provider
    }

    public async delete(id: string){
        await this.ormRepository.delete(id)
    }

    public async findByUserId(user_id: string){
        const provider = await this.ormRepository.findOne({
            where: {
                user_id
            }
        })

        return provider
    }
}