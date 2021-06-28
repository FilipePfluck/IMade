import ICreateOfferDto from "./ICreateOfferDto";
import Offer from "../infra/typeorm/entities/offer";

export default interface IOfferRepository {
    create(data: ICreateOfferDto): Promise<Offer> 
    save(data: Offer): Promise<Offer>
    find(): Promise<Offer[]>
    findById(id: string): Promise<Offer | undefined>
    delete(id: string): Promise<void>
    findProviderOffers(provider_id: string): Promise<Offer[]> 
    findOrderOffers(order_id: string): Promise<Offer[]>
}