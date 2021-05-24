import User from '@modules/users/infra/typeorm/entities/user'
import { Entity, Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm'

@Entity('providers')
export default class Provider {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(() => User)
    @JoinColumn({name: 'user_id'})

    @Column()
    user_id: string

    @Column()
    city: string

    @Column()
    score: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}