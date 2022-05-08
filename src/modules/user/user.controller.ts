import { Body, Controller, Get, Post } from '@nestjs/common';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('test')
  @Roles(Role.Admin)
  getTest(): string {
    return 'getTest';
  }
}
