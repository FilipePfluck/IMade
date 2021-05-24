import { inject, injectable } from 'tsyringe';

import IProviderRepository from '../interfaces/IProviderRepository';

@injectable()
export default class ListProvider {
    constructor (
        @inject('providersRepository')
        private providerRepository: IProviderRepository
    ){}

    public async execute(){
        const providers = await this.providerRepository.find()

        return providers
    }
}