import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IClientRepository from '../interfaces/IClientRepository';

import Client from '../infra/typeorm/entities/client'

interface IRequest {
    id: string,
}

@injectable()
export default class ShowClient {
    constructor (
        @inject('clientsRepository')
        private clientRepository: IClientRepository
    ){}

    public async execute({ id }: IRequest):Promise<Client>{
        const client = await this.clientRepository.findById(id)

        if(!client){
            throw new AppError('Client does not exists')
        }

        return client
    }
}