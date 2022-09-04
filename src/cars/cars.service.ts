/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

export interface Car {
    id: string,
    brand: string,
    model: string
}

@Injectable()
export class CarsService {

    private cars: Car[] = [{
        id: uuid(),
        brand: 'Honda',
        model: 'Fit'
    },
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'VolksWagen',
        model: 'Gol trend'
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Cherokee'
    }]

    findAll() {
        return this.cars;
    }

    findById(id: string) {
        const car = this.cars.find((car: any) => { return car.id === id});

        if(!car) throw new NotFoundException(`El auto con id ${id} no existe`);

        return car;
    }
}
