import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IClientRepository from '../interfaces/IClientRepository';

import Client from '../infra/typeorm/entities/client'

interface IRequest {
    id: string,
    city: string,
    neighborhood: string,
    street: string,
    number: number,
}

@injectable()
export default class UpdateClient {
    constructor (
        @inject('clientsRepository')
        private clientRepository: IClientRepository
    ){}

    public async execute({id, city, number, neighborhood, street}: IRequest){
        const client = await this.clientRepository.findById(id)

        if(!client){
            throw new AppError('user not found')
        }

        client.city = city,
        client.neighborhood = neighborhood,
        client.street = street
        client.number = number

        await this.clientRepository.save(client)

        return client
    }
}