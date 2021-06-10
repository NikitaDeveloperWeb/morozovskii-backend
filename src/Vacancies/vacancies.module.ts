import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VacanciesController } from './vacancies.controller';
import { VacanciesService } from './vacancies.service';
import { Vacancie, VacancieSchema } from './schemas/vacancies.shema';

@Module({
  controllers: [VacanciesController],
  providers: [VacanciesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Vacancie.name,
        schema: VacancieSchema,
      },
    ]),
  ],
  exports: [VacanciesService],
})
export class VacanciesModule {}
