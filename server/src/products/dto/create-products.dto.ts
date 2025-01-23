import { IsString, IsNumber } from 'class-validator';

export class CreateProductsDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsNumber()
  price: number;

  @IsNumber()
  stock_quantity: number;

  @IsString()
  image_url: string;
}
