import {Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { ORDER_REPOSITORY_TOKEN } from '../../common/constants'
import { Order } from '../../entities'
import { OrderDto, OrderCreateDto } from '../dto/orders'


export class OrderService {
  constructor (
    @Inject(ORDER_REPOSITORY_TOKEN) private readonly orderRepository: Repository<Order>,
  ) {}

  async get(userId: string) {
    return this.orderRepository.findOne(userId)
  }

  async getAll() {
    return this.orderRepository.find()
  }

  async create(order: OrderCreateDto): Promise<OrderDto> {
    const orderBody = this.orderRepository.create({
      ...order,
      owner: {
        id: order.owner
      }
    })
    return this.orderRepository.save(orderBody)
  }
}
