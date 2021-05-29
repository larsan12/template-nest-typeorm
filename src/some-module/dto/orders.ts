// tslint:disable:max-classes-per-file
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator'
import { OrderStatus } from '../../entities'
import { UserDto } from './users'
import { Type } from 'class-transformer'

export class OrderCreateDto {
  @IsString()
  owner: string

  @IsNumber()
  price: number

  @IsOptional()
  @IsString()
  comment?: string
}


export class OrderDto {
  @IsString()
  id: string

  @Type(() => UserDto)
  owner?: UserDto

  @IsNumber()
  price: number

  @IsOptional()
  @IsString()
  comment?: string

  @IsString()
  status: OrderStatus

  @IsDate()
  createdAt: Date

  @IsDate()
  updatedAt: Date
}