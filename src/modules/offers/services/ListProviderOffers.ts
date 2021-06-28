import { inject, injectable } from 'tsyringe';

import IOfferRepository from '../interfaces/IOfferRepository';

@injectable()
export default class ListProviderOffer {
    constructor (
        @inject('offersRepository')
        private offerRepository: IOfferRepository
    ){}

    public async execute(provider_id: string){
        const offers = await this.offerRepository.findProviderOffers(provider_id)

        return offers
    }
}