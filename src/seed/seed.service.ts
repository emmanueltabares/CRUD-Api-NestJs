import { Injectable } from '@nestjs/common';
import { BrandsService } from '../brands/brands.service';
import { CarsService } from '../cars/cars.service';
import { BRANDS_SEED } from './brands.seed';
import { CARS_SEED } from './cars.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {}
  
  populateDB() {

    this.carsService.fillCarsWithSeedData( CARS_SEED );
    this.brandsService.fillBrandWithSeedData( BRANDS_SEED );

    return 'Seed executed';
  }
}
