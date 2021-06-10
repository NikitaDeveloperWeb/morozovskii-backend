import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { AppGateway } from './app.gateway';
import { ProductsModule } from './Products/products.module';
import { FeedbacksModule } from './Feedback/feedbacks.module';
import { VacanciesModule } from './Vacancies/vacancies.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGOLAB_URI ||
        'mongodb+srv://UserAdm:kodfg123@cluster0.3ydia.mongodb.net/morozov?retryWrites=true&w=majority',
      {
        useFindAndModify: false,
        useCreateIndex: true,
      },
    ),
    UsersModule,
    AuthModule,
    ProductsModule,
    FeedbacksModule,
    VacanciesModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
