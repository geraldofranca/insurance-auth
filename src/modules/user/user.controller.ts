import { Body, Controller, Get, Post } from '@nestjs/common';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { CreateUserDto } from './dtos/create-user.dto';
import { CreateUserService } from './services';

@Controller('user')
export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.execute(createUserDto);
  }
}
