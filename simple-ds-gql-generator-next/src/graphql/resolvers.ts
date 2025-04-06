import { GraphQLResolveInfo } from 'graphql';
import bcrypt from 'bcryptjs';
import { User } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface RegisterInput {
  email: string;
  login: string;
  password: string;
  role: 'ADMIN' | 'ORGANIZER' | 'VOLUNTEER';
}

export const resolvers = {
  Query: {
    me: async (
      _parent: unknown,
      _args: unknown,
      context: { user?: User },
      _info: GraphQLResolveInfo
    ) => {
      if (!context.user) {
        return null;
      }
      return context.user;
    }
  },
  Mutation: {
    register: async (_parent: any, { input }: { input: RegisterInput }) => {
      try {
        // Проверяем, существует ли пользователь с таким email или login
        const existingUser = await prisma.user.findFirst({
          where: {
            OR: [
              { email: input.email },
              { login: input.login }
            ]
          }
        });

        if (existingUser) {
          return {
            success: false,
            message: 'Пользователь с таким email или логином уже существует',
            user: null
          };
        }

        // Хешируем пароль
        const hashedPassword = await bcrypt.hash(input.password, 10);

        // Создаем нового пользователя
        const user = await prisma.user.create({
          data: {
            email: input.email,
            login: input.login,
            password: hashedPassword,
            role: input.role,
          }
        });

        return {
          success: true,
          message: 'Регистрация успешно завершена',
          user: {
            ...user,
            createdAt: user.createdAt.toISOString(),
            updatedAt: user.updatedAt.toISOString()
          }
        };
      } catch (error) {
        console.error('Ошибка при регистрации:', error);
        return {
          success: false,
          message: 'Произошла ошибка при регистрации',
          user: null
        };
      }
    }
  }
}; 