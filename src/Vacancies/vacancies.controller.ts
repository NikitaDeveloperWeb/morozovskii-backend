import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VacanciesService } from './vacancies.service';
import { CreateVacancieDto } from './dto/create-vacancie.dto';
import { Vacancie } from './schemas/vacancies.shema';
import { UpdateVacancieDto } from './dto/update-vacancie.dto';
@Controller('Vacancies')
export class VacanciesController {
  constructor(private readonly VacancieService: VacanciesService) {}
  // get all Vacancies
  @Get()
  getAll(): Promise<Vacancie[]> {
    return this.VacancieService.getAll();
  }
  // get one Vacancies
  @Get(':id')
  getOne(@Param('id') id: string): Promise<Vacancie> {
    return this.VacancieService.getById(id);
  }

  // create new Vacancie
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createVacancieDto: CreateVacancieDto): Promise<Vacancie> {
    return this.VacancieService.create(createVacancieDto);
  }

  // delete  Vacancie
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Vacancie> {
    return this.VacancieService.remove(id);
  }

  @Put(':id')
  update(
    @Body() updateVacanciesDto: UpdateVacancieDto,
    @Param('id') id: string,
  ): Promise<Vacancie> {
    return this.VacancieService.update(id, updateVacanciesDto);
  }
}
