import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICreateOfferDto from '../interfaces/ICreateOfferDto'

import IOfferRepository from '../interfaces/IOfferRepository';

@injectable()
export default class CreateOffer {
    constructor (
        @inject('offersRepository')
        private offerRepository: IOfferRepository
    ){}

    public async execute(data: ICreateOfferDto){
    
        const offer = await this.offerRepository.create(data)

        return offer
    }
}