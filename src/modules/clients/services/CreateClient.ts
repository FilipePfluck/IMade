import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICreateClientDto from '../interfaces/ICreateClientDto'

import IClientRepository from '../interfaces/IClientRepository';

@injectable()
export default class CreateClient {
    constructor (
        @inject('clientsRepository')
        private clientRepository: IClientRepository
    ){}

    public async execute(data: ICreateClientDto){
    
        const client = await this.clientRepository.create(data)

        return client
    }
}