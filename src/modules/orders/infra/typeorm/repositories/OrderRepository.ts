import ICreateOrderDto from "@modules/orders/interfaces/ICreateOrderDto";
import IOrderRepository from "@modules/orders/interfaces/IOrderRepository";
import { getRepository, Repository } from "typeorm";
import Order from "../entities/order";

export default class OrderRepository implements IOrderRepository {
    private ormRepository: Repository<Order>

    constructor(){
        this.ormRepository = getRepository(Order)
    }

    public async create(data: ICreateOrderDto){
        const order = this.ormRepository.create(data)

        await this.ormRepository.save(order)

        return order
    }

    public async find(){
        const orders = await this.ormRepository.find()

        return orders
    }

    public async findById(id: string){
        const order = await this.ormRepository.findOne(id)

        return order
    }

    public async save(data: Order){
        const order = await this.ormRepository.save(data)

        return order
    }

    public async delete(id: string){
        await this.ormRepository.delete(id)
    }

    public async findClientOrder(client_id: string){
        const orders  = await this.ormRepository.find({
            where: {
                client_id
            }
        })

        return orders
    }
}