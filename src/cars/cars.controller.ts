/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';


@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}


  //* Obtiene todos los autos
  @Get()
  getAllCars(): Car[] {
    return this.carsService.findAll();
  }

  //* Obtiene el auto con el id recibido por parámetro
  @Get(':uuid')
  getCarById(@Param('uuid', new ParseUUIDPipe({version: '4'})) id: string): Car {
    return this.carsService.findOneById(id);
  }

  //* Crea un objeto auto basado en una clase dto
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar( 
    @Param('id', ParseUUIDPipe ) id: string, 
    @Body() updateCarDto: UpdateCarDto ) 
  {
    return this.carsService.update( id, updateCarDto );
  }

  @Delete(':id')
  deleteCar( @Param('id', ParseUUIDPipe ) id: string ) {
    return this.carsService.delete( id )
  }
}
