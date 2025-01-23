import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ValidationPipe } from './dto/validation-pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Post('/register')
  async register(@Body(new ValidationPipe()) body: CreateUserDto) {
    const { name, email, password } = body;

    return this.usersService.register(name, email, password);
  }

  @Post('/login')
  async login(@Body(new ValidationPipe()) body: LoginUserDto) {
    const { email, password } = body;

    return this.usersService.login(email, password);
  }

  @Post('/userdata')
  async userdata(@Body() body) {
    const { token } = body;

    return this.usersService.userdata(token);
  }
}
