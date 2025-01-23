import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';
import { ValidationPipe } from './dto/validation-pipe';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return this.productsService.getProduct(id);
  }

  @Get('/category/:category')
  async filterProductByCategory(@Param('category') category: string) {
    return this.productsService.filterProductByCategory(category);
  }

  @Get('/purchasedItems/:customerId')
  async purchasedItems(@Param('customerId') customerId: string) {
    return this.productsService.purchasedItems(customerId);
  }

  @Post('/register')
  async register(@Body(new ValidationPipe()) body: CreateProductsDto) {
    const { name, description, category, price, stock_quantity, image_url } =
      body;

    return this.productsService.register(
      name,
      description,
      category,
      price,
      stock_quantity,
      image_url,
    );
  }

  @Post('/checkout')
  async checkout(@Body() body) {
    const { customerId, itens } = body;

    return this.productsService.checkout(customerId, itens);
  }
}
