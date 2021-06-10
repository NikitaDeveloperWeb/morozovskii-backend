import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { FeedbacksService } from './feedbacks.service';
import { Feedback } from './schemas/feedback.shema';

@Controller('Feedbacks')
export class FeedbacksController {
  constructor(private readonly FeedbackService: FeedbacksService) {}
  // get all Feedbacks
  @Get()
  getAll(): Promise<Feedback[]> {
    return this.FeedbackService.getAll();
  }
  // get one Feedbacks
  @Get(':id')
  getOne(@Param('id') id: string): Promise<Feedback> {
    return this.FeedbackService.getById(id);
  }

  // create new Feedback
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    return this.FeedbackService.create(createFeedbackDto);
  }
}
