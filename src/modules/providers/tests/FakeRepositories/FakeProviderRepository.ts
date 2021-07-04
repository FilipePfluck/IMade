import { uuid }  from 'uuidv4'

import ICreateProviderDto from "@modules/providers/interfaces/ICreateProviderDto";
import IProviderRepository from "@modules/providers/interfaces/IProviderRepository";

import Provider from '../../infra/typeorm/entities/provider'

export default class FakeProviderRepository 
    implements IProviderRepository{
        private providers: Provider[] = []

        public async find(): Promise<Provider[]>{
            return this.providers
        }

        public async findById(Id: string): Promise<Provider | undefined> {
            const provider = this.providers.find(provider => provider.id === Id)

            return provider
        }

        public async create(data: ICreateProviderDto): Promise<Provider>{
            const provider = new Provider()

            Object.assign(provider, {id: uuid(), ...data})

            this.providers.push(provider)

            return provider
        }

        public async save(provider: Provider): Promise<Provider>{
            const findIndex = this.providers.findIndex(foundprovider => foundprovider.id === provider.id)

            this.providers[findIndex] = provider

            return provider
        }

        public async delete(id: string): Promise<void> {
            this.providers = this.providers.filter(provider => provider.id !== id)
        }

        public async findByUserId(user_id: string){
            const  provider = this.providers.find(provider => provider.user_id === user_id)
            return provider
        }
    }