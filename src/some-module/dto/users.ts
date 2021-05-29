// tslint:disable:max-classes-per-file
import { IsEmail, IsString, IsArray } from 'class-validator'
import { OrderDto } from './orders'
import { Type } from 'class-transformer'


export class UserCreateDto {
  @IsEmail()
  email: string
}

export class UserDto {
  @IsString()
  id: string

  @IsEmail()
  email: string

  @IsArray()
  @Type(() => OrderDto)
  comment?: OrderDto[]
}