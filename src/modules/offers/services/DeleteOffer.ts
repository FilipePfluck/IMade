import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IOfferRepository from '../interfaces/IOfferRepository';

import Offer from '../infra/typeorm/entities/offer'

interface IRequest {
    id: string,
}

@injectable()
export default class DeleteOffer {
    constructor (
        @inject('offersRepository')
        private offerRepository: IOfferRepository
    ){}

    public async execute({ id }: IRequest){
        await this.offerRepository.delete(id)
    }
}