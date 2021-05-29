import { Controller, Get, Body, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { validationCfg } from '../../common/validation.cfg'
import { OrderDto, OrderCreateDto } from '../dto/orders'
import { OrderService } from '../services/orders.service'

@ApiTags('orders')
@UsePipes(new ValidationPipe(validationCfg()))
@Controller('v1/orders')
export class OrderController {
  constructor (
    private readonly orderService: OrderService
  ) {}

  @Get('/')
  @ApiOkResponse({ type: OrderDto, isArray: true })
  async getOrders () {
    return this.orderService.getAll()
  }

  @Get('/:id')
  @ApiOkResponse({ type: OrderDto })
  async getOrder (@Param('id') id: string) {
    return this.orderService.get(id)
  }

  @Post('/create')
  @ApiOkResponse({ type: OrderDto })
  async createOrder (@Body() order: OrderCreateDto) {
    return this.orderService.create(order)
  }
}
