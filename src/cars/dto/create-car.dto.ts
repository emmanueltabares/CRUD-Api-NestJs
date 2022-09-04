import { IsString, MinLength } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateCarDto {

    @IsString()
    @MinLength(3)
    readonly brand: string;

    @IsString()
    @MinLength(3)
    readonly model: string
}