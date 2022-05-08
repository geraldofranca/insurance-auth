import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { FindByEmailUserService } from '../user/services';
import { UserPayload, UserToken } from './protocols';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly findByEmailUserService: FindByEmailUserService,
  ) {}

  async login(user: User): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.findByEmailUserService.execute(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new Error(
      'O endereço de e-mail ou a senha fornecidos estão incorretos.',
    );
  }
}
