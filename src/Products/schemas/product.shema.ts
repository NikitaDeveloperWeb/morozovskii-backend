/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  composition: string;

  @Prop({ type: String, required: true })
  type: string;

  @Prop({ type: String, required: true })
  image: string;

  @Prop({ type: String, required: false, })
  image2: string;

  @Prop({ type: String, required: false, })
  image3: string;

  @Prop({ type: Number, required: true })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
