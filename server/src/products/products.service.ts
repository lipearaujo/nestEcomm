import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getAllProducts() {
    const products = this.prisma.products.findMany();

    return products;
  }

  async getProduct(id: string) {
    try {
      const product = this.prisma.products.findUnique({
        where: {
          id,
        },
      });

      if (!product) return { message: 'Product not found!' };

      return product;
    } catch (error) {
      return { message: error };
    }
  }

  async filterProductByCategory(category: string) {
    try {
      const products = await this.prisma.products.findMany({
        where: {
          category: {
            equals: category,
          },
        },
      });

      if (!products) return { message: 'Product not found!' };

      return products;
    } catch (error) {
      console.log(error);
    }
  }

  async register(
    name: string,
    description: string,
    category: string,
    price: number,
    stock_quantity: number,
    image_url: string,
  ) {
    try {
      const products = await this.prisma.products.create({
        data: {
          name,
          description,
          category,
          price,
          stockQuantity: stock_quantity,
          imageURL: image_url,
        },
      });

      return products;
    } catch (error) {
      return { message: error };
    }
  }

  async checkout(customerId: string, itens: any) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: customerId,
        },
        include: {
          purchasedItems: {},
        },
      });

      const productIds = Object.keys(itens);
      const products = await this.prisma.products.findMany({
        where: {
          id: { in: productIds },
        },
      });

      if (!user) return { message: 'User not found.' };

      if (products.length !== productIds.length)
        return { message: 'Product not found.' };

      for (const item in itens) {
        const product = products.find((product) => product.id === item);

        if (!product) return { message: 'Product not found.' };

        if (product.stockQuantity < itens[item])
          return { message: 'Not enough stock.' };
      }

      await this.prisma.products.updateMany({
        where: {
          id: { in: productIds },
        },
        data: {
          userId: customerId,
          stockQuantity: {
            decrement: 1,
          },
        },
      });

      return { CustomerId: customerId, PurchasedItems: user.purchasedItems };
    } catch (error) {
      return { message: error };
    }
  }

  async purchasedItems(customerId: string) {
    try {
      const purchasedProducts = await this.prisma.products.findMany({
        where: {
          userId: customerId,
        },
      });

      return { PurchasedItems: purchasedProducts };
    } catch (error) {
      return { message: error };
    }
  }
}
