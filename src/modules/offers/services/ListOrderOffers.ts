import { inject, injectable } from 'tsyringe';

import IOfferRepository from '../interfaces/IOfferRepository';

@injectable()
export default class ListOrderOffer {
    constructor (
        @inject('offersRepository')
        private offerRepository: IOfferRepository
    ){}

    public async execute(order_id: string){
        const offers = await this.offerRepository.findOrderOffers(order_id)

        return offers
    }
}