export default interface ICreateOfferDto{
    order_id: string
    provider_id: string
    price: number
    comment?: string
}