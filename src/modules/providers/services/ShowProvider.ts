import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IProviderRepository from '../interfaces/IProviderRepository';

import Provider from '../infra/typeorm/entities/provider'

interface IRequest {
    id: string,
}

@injectable()
export default class ShowProvider {
    constructor (
        @inject('providersRepository')
        private providerRepository: IProviderRepository
    ){}

    public async execute({ id }: IRequest):Promise<Provider>{
        const provider = await this.providerRepository.findById(id)

        if(!provider){
            throw new AppError('Provider does not exists')
        }

        return provider
    }
}