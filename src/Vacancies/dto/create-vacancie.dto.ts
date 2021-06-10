/* eslint-disable prettier/prettier */

import * as mongoose from 'mongoose';
export class CreateVacancieDto {
  readonly title: string;
  readonly claim: string;
  readonly sallary: number;
}
