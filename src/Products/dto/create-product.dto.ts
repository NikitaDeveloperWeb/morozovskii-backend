/* eslint-disable prettier/prettier */

import * as mongoose from 'mongoose';
export class CreateProductDto {
  readonly title: string;
  readonly image: string;
  readonly type: string;
  readonly price: number;
  readonly composition: string;
}
