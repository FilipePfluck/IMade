import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IOfferRepository from '../interfaces/IOfferRepository';

import Offer from '../infra/typeorm/entities/offer'

interface IRequest {
    id: string
    price: number
    comment: string
}

@injectable()
export default class UpdateOffer {
    constructor (
        @inject('offersRepository')
        private offerRepository: IOfferRepository
    ){}

    public async execute({id, price, comment}: IRequest){
    
        const offer = await this.offerRepository.findById(id)

        if(!offer){
            throw new AppError('user not found')
        }

        offer.comment = comment
        offer.price = price

        await this.offerRepository.save(offer)

        return offer
    }
}