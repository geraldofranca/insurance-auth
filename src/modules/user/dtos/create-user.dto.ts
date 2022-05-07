import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsInt,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'senha muito fraca',
  })
  password: string;

  @IsString()
  name: string;

  @IsInt()
  role_id: number;
}
