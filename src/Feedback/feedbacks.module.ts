import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedbacksController } from './feedbacks.controller';
import { FeedbacksService } from './feedbacks.service';
import { Feedback, FeedbackSchema } from './schemas/feedback.shema';

@Module({
  controllers: [FeedbacksController],
  providers: [FeedbacksService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Feedback.name,
        schema: FeedbackSchema,
      },
    ]),
  ],
  exports: [FeedbacksService],
})
export class FeedbacksModule {}
