import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IProviderRepository from '../interfaces/IProviderRepository';

interface IRequest {
    id: string,
    newAvaliation: number
}

@injectable()
export default class UpdateProviderScore {
    constructor (
        @inject('providersRepository')
        private providerRepository: IProviderRepository
    ){}

    public async execute({id, newAvaliation}: IRequest){
        const provider = await this.providerRepository.findById(id)

        if(!provider){
            throw new AppError('user not found')
        }

        const newScore = 
            (provider.score * provider.avaliations + newAvaliation)
            /(provider.avaliations + 1)

        provider.score = newScore
        provider.avaliations = provider.avaliations + 1

        await this.providerRepository.save(provider)

        return provider
    }
}