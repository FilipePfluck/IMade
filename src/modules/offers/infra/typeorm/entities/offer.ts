import { Entity, Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'

import Provider from '@modules/providers/infra/typeorm/entities/provider'
import Order from '@modules/orders/infra/typeorm/entities/order'

@Entity('offers')
export default class Offer {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    order_id: string

    @Column()
    provider_id: string

    @ManyToOne(()=> Provider)
    @JoinColumn({name: 'provider_id'})
    provider: Provider

    @ManyToOne(()=> Order, {
        eager: true
    })
    @JoinColumn({name: 'order_id'})
    order: Order

    @Column()
    price: number

    @Column()
    comment?: string
}