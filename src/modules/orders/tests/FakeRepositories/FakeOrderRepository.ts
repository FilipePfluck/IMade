import { uuid }  from 'uuidv4'

import ICreateOrderDto from "@modules/orders/interfaces/ICreateOrderDto";
import IOrderRepository from "@modules/orders/interfaces/IOrderRepository";

import Order from '../../infra/typeorm/entities/order'

export default class FakeOrderRepository 
    implements IOrderRepository{
        private orders: Order[] = []

        public async find(): Promise<Order[]>{
            return this.orders
        }

        public async findById(Id: string){
            const order = this.orders.find(order => order.id === Id)

            return order
        }

        public async create(data: ICreateOrderDto){
            const order = new Order()

            Object.assign(order,{id: uuid(), ...data})

            this.orders.push(order)

            return order
        }

        public async save(order: Order){
            const findIndex = this.orders.findIndex(foundorder => foundorder.id === order.id)

            this.orders[findIndex] = order

            return order
        }

        public async delete(id: string) {
            this.orders = this.orders.filter(order => order.id !== id)
        }

        public async findClientOrder(id: string){
            const orders = this.orders.filter(order => order.client_id === id)
            
            return orders
        }

        public async findByCity(city: string){
            const orders = this.orders.filter(order => order.city === city)
            
            return orders
        }

        public async findProviderOrder(id: string){
            const orders = this.orders.filter(order => order.provider_id === id)

            return orders
        }
    }