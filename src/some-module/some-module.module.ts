import { HttpModule, Module } from '@nestjs/common'
import { Connection } from 'typeorm'
import {
  DB_CON_TOKEN,
  ORDER_REPOSITORY_TOKEN,
  USER_REPOSITORY_TOKEN
} from '../common/constants'
import { ConfigService } from '../config/config.service'
import { DatabaseModule } from '../database/database.module'
import { Order, User } from '../entities'
import { OrderController } from './controllers/order.controllers'
import { UserController } from './controllers/user.controller'
import { OrderService } from './services/orders.service'
import { UserService } from './services/user.service'


@Module({
  imports: [
    DatabaseModule.forRoot(), HttpModule
  ],
  controllers: [UserController, OrderController],
  providers: [
    {
      provide: USER_REPOSITORY_TOKEN,
      useFactory: (connection: Connection) => {
        return connection.getRepository(User)
      },
      inject: [DB_CON_TOKEN],
    },
    {
      provide: ORDER_REPOSITORY_TOKEN,
      useFactory: (connection: Connection) => {
        return connection.getRepository(Order)
      },
      inject: [DB_CON_TOKEN],
    },
    ConfigService,
    UserService,
    OrderService,
  ],
  exports: [UserService]
})
export class SomeModule {
}
