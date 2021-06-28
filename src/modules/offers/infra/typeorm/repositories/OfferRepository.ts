import ICreateOfferDto from "@modules/offers/interfaces/ICreateOfferDto";
import IOfferRepository from "@modules/offers/interfaces/IOfferRepository";
import { getRepository, Repository } from "typeorm";
import Offer from "../entities/offer";

export default class OfferRepository implements IOfferRepository {
    private ormRepository: Repository<Offer>

    constructor(){
        this.ormRepository = getRepository(Offer)
    }

    public async create(data: ICreateOfferDto){
        const offer = this.ormRepository.create(data)

        await this.ormRepository.save(offer)

        return offer
    }

    public async find(){
        const offers = await this.ormRepository.find()

        return offers
    }

    public async findById(id: string){
        const offer = await this.ormRepository.findOne(id)

        return offer
    }

    public async save(data: Offer){
        const offer = await this.ormRepository.save(data)

        return offer
    }

    public async delete(id: string){
        await this.ormRepository.delete(id)
    }

    public async findProviderOffers(provider_id: string){
        const offers = this.ormRepository.find({
            where: {provider_id}
        })

        return offers
    }

    public async findOrderOffers(order_id: string){
        const offers = this.ormRepository.find({
            where: {order_id}
        })

        return offers
    }
}