import { inject, injectable } from 'tsyringe';

import IClientRepository from '../interfaces/IClientRepository';

@injectable()
export default class ListClient {
    constructor (
        @inject('clientsRepository')
        private clientRepository: IClientRepository
    ){}

    public async execute(){
        const clients = await this.clientRepository.find()

        return clients
    }
}