import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Cherokee'
    },
    {
        id: uuid(),
        brand: 'VolksWagen',
        model: 'Gol Trend'
    },
    {
        id: uuid(),
        brand: 'Fiat',
        model: 'Palio'
    },
    {
        id: uuid(),
        brand: 'Chevrolet',
        model: 'Cruze'
    }
]