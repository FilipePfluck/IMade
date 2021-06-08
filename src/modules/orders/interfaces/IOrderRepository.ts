import ICreateOrderDto from "./ICreateOrderDto";
import Order from "../infra/typeorm/entities/order";

export default interface IOrderRepository {
    create(data: ICreateOrderDto): Promise<Order> 
    save(data: Order): Promise<Order>
    find(): Promise<Order[]>
    findById(id: string): Promise<Order | undefined>
    findClientOrder(client_id: string): Promise<Order[]>
    findByCity(city: string): Promise<Order[]>
    delete(id: string): Promise<void>
}