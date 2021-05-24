import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IClientRepository from '../interfaces/IClientRepository';

import Client from '../infra/typeorm/entities/client'

interface IRequest {
    id: string,
}

@injectable()
export default class DeleteClient {
    constructor (
        @inject('clientsRepository')
        private clientRepository: IClientRepository
    ){}

    public async execute({ id }: IRequest){
        await this.clientRepository.delete(id)
    }
}