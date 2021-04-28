import { Entity, Column, OneToOne,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm'

import User from '@modules/users/infra/typeorm/entities/user'

@Entity('clients')
class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(()=>User)
    @JoinColumn({name: 'user_id'})
    user: User

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export default Client