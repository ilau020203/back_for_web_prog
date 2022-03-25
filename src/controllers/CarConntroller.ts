import {JsonController, Get, Post , Param, Delete, Body,Put} from "routing-controllers";
import {Service} from "typedi";
import Car from "../models/Car";
import {DeleteResult, getConnection} from "typeorm";
import {CarRepository} from "../repository/CarRepository" 

@Service()
@JsonController()
export class CarConntroller {
    constructor(private carRepository: CarRepository) {
    }

    @Get("/cars")
    async getAll(): Promise<Car[]> {
        return await this.carRepository.findAll();
    }
    
    @Get("/car/drivingEntry/:id")
    async searchDrivingEntriesByCarId(@Param("id")id : number) {
        return await this.carRepository.searchOneCarWithrivingEntry(id);
    }

    @Get("/search-car/:brend")
    async searchOneCarModel(@Param("brend") brend: string): Promise<Car> {
        return await this.carRepository.searchOneCarBrend(brend);
    }
    @Get("/cars/:brend")
    async searchManyCarModel(@Param("brend") brend: string) : Promise<Car[]>{
        return await this.carRepository.searchManyCarBrend(brend);
    }              
    @Post("/car")
    async post(@Body() car: Car) {
        return await this.carRepository.create(car);
    }

    @Delete("/car/:id")
    async delete(@Param("id") id: number):Promise<DeleteResult> {
        return await this.carRepository.delete(id);
    }

    @Put('/car/:id')
    async put(@Param('id') id: number, @Body() car: Car) {
        return await this.carRepository.put(id,car);
    }

}