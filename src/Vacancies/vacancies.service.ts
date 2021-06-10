import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVacancieDto } from './dto/create-vacancie.dto';
import { UpdateVacancieDto } from './dto/update-vacancie.dto';
import { Vacancie, VacancieDocument } from './schemas/vacancies.shema';

@Injectable()
export class VacanciesService {
  constructor(
    @InjectModel('Vacancie') private VacancieModel: Model<VacancieDocument>,
  ) {}

  async getById(id: string): Promise<Vacancie> {
    return this.VacancieModel.findById(id);
  }
  async getAll(): Promise<Vacancie[]> {
    return await this.VacancieModel.find().exec();
  }
  async create(VacancieDto: CreateVacancieDto): Promise<Vacancie> {
    const newVacancie = new this.VacancieModel(VacancieDto);
    return await newVacancie.save();
  }
  async remove(id: string): Promise<Vacancie> {
    return this.VacancieModel.findByIdAndRemove(id);
  }
  async update(id: string, VacancieDto: UpdateVacancieDto): Promise<Vacancie> {
    return this.VacancieModel.findByIdAndUpdate(id, VacancieDto, { new: true });
  }
}
