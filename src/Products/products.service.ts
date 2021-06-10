import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.shema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private ProductModel: Model<ProductDocument>,
  ) {}

  async getById(id: string): Promise<Product> {
    return this.ProductModel.findById(id);
  }
  async getAll(): Promise<Product[]> {
    return await this.ProductModel.find().exec();
  }
  async create(ProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.ProductModel(ProductDto);
    return await newProduct.save();
  }
  async remove(id: string): Promise<Product> {
    return this.ProductModel.findByIdAndRemove(id);
  }
  async update(id: string, ProductDto: UpdateProductDto): Promise<Product> {
    return this.ProductModel.findByIdAndUpdate(id, ProductDto, { new: true });
  }
}
