/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';
export type VacancieDocument = Vacancie & Document;

@Schema()
export class Vacancie {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  claim: string;

  @Prop({ type: Number, required: true })
  sallary: number;
}

export const VacancieSchema = SchemaFactory.createForClass(Vacancie);
