import User from '@modules/users/infra/typeorm/entities/user'
import { Entity, Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm'

@Entity('clients')
export default class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(() => User)
    @JoinColumn({name: 'user_id'})

    @Column()
    user_id: string

    @Column()
    city: string

    @Column()
    neighborhood: string

    @Column()
    street: string

    @Column()
    number: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}