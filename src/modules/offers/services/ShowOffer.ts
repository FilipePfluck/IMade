import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IOfferRepository from '../interfaces/IOfferRepository';

import Offer from '../infra/typeorm/entities/offer'

interface IRequest {
    id: string,
}

@injectable()
export default class ShowOffer {
    constructor (
        @inject('offersRepository')
        private offerRepository: IOfferRepository
    ){}

    public async execute({ id }: IRequest):Promise<Offer>{
        const offer = await this.offerRepository.findById(id)

        if(!offer){
            throw new AppError('Offer does not exists')
        }

        return offer
    }
}