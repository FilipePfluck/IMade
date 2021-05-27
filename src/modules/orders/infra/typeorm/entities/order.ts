import Client from '@modules/clients/infra/typeorm/entities/client'
import Provider from '@modules/providers/infra/typeorm/entities/provider'
import { Entity, Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'

@Entity('orders')
export default class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(()=> Client)
    @JoinColumn({name: 'client_id'})
    client: Client

    @Column()
    client_id: string

    @ManyToOne(()=> Provider)
    @JoinColumn({name: 'provider_id'})
    provider: Provider

    @Column()
    provider_id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    min: number

    @Column()
    max: number

    @Column('timestamp with time zone')
    date: Date

    @Column()
    status: string

    @Column()
    city: string
}