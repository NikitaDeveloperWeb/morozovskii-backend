import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './schemas/product.shema';
import { UpdateProductDto } from './dto/update-product.dto';
@Controller('Products')
export class ProductsController {
  constructor(private readonly ProductService: ProductsService) {}
  // get all Products
  @Get()
  getAll(): Promise<Product[]> {
    return this.ProductService.getAll();
  }
  // get one Products
  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product> {
    return this.ProductService.getById(id);
  }

  // create new Product
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.ProductService.create(createProductDto);
  }

  // delete  Product
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.ProductService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updateProductsDto: UpdateProductDto,
    @Param('id') id: string,
  ): Promise<Product> {
    return this.ProductService.update(id, updateProductsDto);
  }
}
