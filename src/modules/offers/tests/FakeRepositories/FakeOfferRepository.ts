import { uuid }  from 'uuidv4'

import ICreateOfferDto from "@modules/offers/interfaces/ICreateOfferDto";
import IOfferRepository from "@modules/offers/interfaces/IOfferRepository";

import Offer from '../../infra/typeorm/entities/offer'

export default class FakeOfferRepository 
    implements IOfferRepository{
        private offers: Offer[] = []

        public async find(): Promise<Offer[]>{
            return this.offers
        }

        public async findById(Id: string): Promise<Offer | undefined> {
            const offer = this.offers.find(offer => offer.id === Id)

            return offer
        }

        public async create(data: ICreateOfferDto): Promise<Offer>{
            const offer = new Offer()

            Object.assign(offer,{id: uuid(), ...data})

            this.offers.push(offer)

            return offer
        }

        public async save(offer: Offer): Promise<Offer>{
            const findIndex = this.offers.findIndex(foundoffer => foundoffer.id === offer.id)

            this.offers[findIndex] = offer

            return offer
        }

        public async delete(id: string): Promise<void> {
            this.offers = this.offers.filter(offer => offer.id !== id)
        }

        public async findProviderOffers(provider_id: string){
            const offers = this.offers.filter(offer => {
                return offer.provider_id === provider_id
            })

            return offers
        }

        public async findOrderOffers(order_id: string){
            const offers = this.offers.filter(offer => {
                return offer.order_id === order_id
            })

            return offers
        }
    }