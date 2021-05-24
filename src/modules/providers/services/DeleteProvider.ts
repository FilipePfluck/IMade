import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IProviderRepository from '../interfaces/IProviderRepository';

import Provider from '../infra/typeorm/entities/provider'

interface IRequest {
    id: string,
}

@injectable()
export default class DeleteProvider {
    constructor (
        @inject('providersRepository')
        private providerRepository: IProviderRepository
    ){}

    public async execute({ id }: IRequest){
        await this.providerRepository.delete(id)
    }
}