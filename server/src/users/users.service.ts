import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async getAllUsers() {
    const users = await this.prisma.user.findMany();

    return users;
  }

  async getUser(id: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          purchasedItems: {},
        },
      });

      if (!user) return { message: 'User not found' };

      return { user: user, username: user.name };
    } catch (error) {
      return { message: error };
    }
  }

  async register(name: string, email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return { message: 'User already exists with this email' };
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const registerUser = await this.prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      return { message: 'User created successfully!' };
    } catch (error) {
      return { message: error };
    }
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!user || !isPasswordValid)
      return { message: 'Invalid email or password! Please, try again.' };

    const payload = {
      id: user.id,
    };

    const token = this.jwtService.sign(payload);

    return { access_token: token, userId: user.id };
  }

  async userdata(token: string) {
    try {
      const user = this.jwtService.verify(token);
      const userId = user.id;

      const userdata = await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!userdata) {
        return { message: 'User not found.' };
      }

      return { user: userdata?.id, username: userdata.name };
    } catch (error) {
      return { message: error };
    }
  }
}
