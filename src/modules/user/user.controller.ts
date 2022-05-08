import { Body, Controller, Get, Post } from '@nestjs/common';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly createUserService: UserService) {}

  @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.execute(createUserDto);
  }
}
