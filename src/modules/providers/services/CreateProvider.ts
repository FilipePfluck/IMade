import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICreateProviderDto from '../interfaces/ICreateProviderDto'

import IProviderRepository from '../interfaces/IProviderRepository';

@injectable()
export default class CreateProvider {
    constructor (
        @inject('providersRepository')
        private providerRepository: IProviderRepository
    ){}

    public async execute(data: ICreateProviderDto){
        
        console.log('asdasd',data)

        const provider = await this.providerRepository.create(data)

        return provider
    }
}