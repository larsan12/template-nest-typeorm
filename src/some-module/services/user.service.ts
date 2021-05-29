import { Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { USER_REPOSITORY_TOKEN } from '../../common/constants'
import { User } from '../../entities'
import { UserCreateDto } from '../dto/users'


export class UserService {
  constructor (
    @Inject(USER_REPOSITORY_TOKEN) private readonly userRepository: Repository<User>,
  ) {}

  async get(userId: string) {
    return this.userRepository.findOne(userId)
  }

  async getAll() {
    return this.userRepository.find()
  }

  async create(user: UserCreateDto): Promise<User> {
    const userBody = this.userRepository.create({
      email: user.email,
    })
    const userResponse = await this.userRepository.save(userBody)
    return userResponse
  }
}
