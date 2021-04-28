import { Entity, Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    phone_number: string

    @Column()
    is_provider: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export default User