import { isAfter } from 'date-fns';
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

        const filteredOffers = offers.filter(offer => {
            const compareDate = new Date(offer.order.date)

            const isNotPastDate = isAfter(compareDate, Date.now())

            return offer.order.status !== 'accepted' && isNotPastDate
        })

        return filteredOffers
    }
}