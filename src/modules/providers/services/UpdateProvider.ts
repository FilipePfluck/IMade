import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IProviderRepository from '../interfaces/IProviderRepository';

interface IRequest {
    id: string,
    city: string,
    score: number
}

@injectable()
export default class UpdateProvider {
    constructor (
        @inject('providersRepository')
        private providerRepository: IProviderRepository
    ){}

    public async execute({id, city, score}: IRequest){
        const provider = await this.providerRepository.findById(id)

        if(!provider){
            throw new AppError('user not found')
        }

        provider.city = city,
        provider.score = score

        await this.providerRepository.save(provider)

        return provider
    }
}