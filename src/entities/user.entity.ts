import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Order } from './orders.entity'


export interface IUser {
  id?: string,
  login: string,
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'email', unique: true })
  email: string

  @OneToMany(() => Order, order => order.owner, { eager: true })
  purchases: Order[]
}
