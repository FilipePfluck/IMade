export default interface ICreateOrderDto{
    client_id: string
    provider_id?: string
    title: string
    description: string
    min: number
    max: number
    date: Date
    status: string
    city: string
}