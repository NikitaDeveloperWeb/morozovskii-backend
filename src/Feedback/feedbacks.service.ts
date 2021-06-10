import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { FeedbackDocument, Feedback } from './schemas/feedback.shema';

@Injectable()
export class FeedbacksService {
  constructor(
    @InjectModel('Feedback') private FeedbackModel: Model<FeedbackDocument>,
  ) {}

  async getById(id: string): Promise<Feedback> {
    return this.FeedbackModel.findById(id);
  }
  async getAll(): Promise<Feedback[]> {
    return await this.FeedbackModel.find().exec();
  }

  async create(FeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const newFeedback = new this.FeedbackModel(FeedbackDto);
    return await newFeedback.save();
  }
}
