import User from '@modules/users/infra/typeorm/entities/user'
import { Entity, Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm'

@Entity('providers')
export default class Provider {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(() => User, {
        eager: true
    })
    @JoinColumn({name: 'user_id'})
    user: User

    @Column()
    user_id: string

    @Column()
    city: string

    @Column()
    score: number

    @Column()
    avaliations: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}