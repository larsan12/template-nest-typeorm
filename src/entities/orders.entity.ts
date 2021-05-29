import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm'
import { User } from '.'

export enum OrderStatus {
  Pending = 'pending',
  Declined = 'declined',
  Approved = 'approved',
  Paid = 'paid',
  Completed = 'completed'
}

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User, user => user.id)
  @JoinColumn()
  owner: User

  @Column({ nullable: false })
  price: number

  @Column({ nullable: true })
  comment: string

  @Column({ nullable: true })
  transactionId: string

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.Pending
  })
  status: OrderStatus

  @CreateDateColumn({type: 'timestamptz'}) createdAt: Date
  @UpdateDateColumn({type: 'timestamptz'}) updatedAt: Date
}
