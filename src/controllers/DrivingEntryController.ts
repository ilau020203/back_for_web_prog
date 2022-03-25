import {JsonController, Get, Post , Param, Delete, Body,Put} from "routing-controllers";
import {Service} from "typedi";
import DrivingEntry from "../models/DrivingEntry";
import {DeleteResult, getConnection, UpdateResult} from "typeorm";
import { DrivingEntryRepository } from "../repository/DrivingEntryRepository";

@Service()
@JsonController()
export class DrivingEntryConntroller {
    constructor(private drivingEntryRepository: DrivingEntryRepository) {
    }
    @Get("/drivingEntry")
    async all(): Promise<DrivingEntry[]> {
        return await this.drivingEntryRepository.findAll();
    }


    @Get("/user/drivingEntry/:id")
    async searchOneDrivingEntryByUserID(@Param("id") id: number): Promise<DrivingEntry[]> {
        return await this.drivingEntryRepository.searchDrivingEntryByUserID(id);
    }
    
    @Get("/drivingEntry/by-user-id/:id")
    async searchOneDrivingEntryBy(@Param("id") id: number): Promise<DrivingEntry[]> {
        return await this.drivingEntryRepository.searchDrivingEntryByUserID(id);
    }

    @Post("/drivingEntry")
    async post(@Body() drivingEntry: DrivingEntry): Promise<DrivingEntry> {
        return await  this.drivingEntryRepository.create(drivingEntry);
    }

    @Delete("/drivingEntry/:id")
    async delete(@Param("id") id: number):Promise<DeleteResult> {
        return await  this.drivingEntryRepository.delete(id);
    }

    // @Put('/drivingEntry/:id')
    // async put(@Param('id') id: number, @Body() drivingEntry: DrivingEntry):Promise<UpdateResult> {
    //     return await  this.drivingEntryRepository.update(id,drivingEntry);
    // }

}