/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type FeedbackDocument = Feedback & Document;

@Schema()
export class Feedback {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: String, required: true })
  type: string;

  @Prop({ type: String, required: true })
  text: string;

  @Prop({ type: String, required: true })
  date: string;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
