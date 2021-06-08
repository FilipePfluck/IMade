import { inject, injectable } from 'tsyringe';

import IOfferRepository from '../interfaces/IOfferRepository';

@injectable()
export default class ListOffer {
    constructor (
        @inject('offersRepository')
        private offerRepository: IOfferRepository
    ){}

    public async execute(){
        const offers = await this.offerRepository.find()

        return offers
    }
}