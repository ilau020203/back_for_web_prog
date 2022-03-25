import {JsonController, Get, Post , Param, Delete, Body,Put} from "routing-controllers";
import {Service} from "typedi";
import User from "../models/User";
import {DeleteResult, getConnection} from "typeorm";
import { UserRepository } from "../services/User";

@Service()
@JsonController()
export class UserConntroller {
    constructor(private userRepository: UserRepository) {
    }
    @Get("/user")
    async all(): Promise<User[]> {
        return await this.userRepository.findAll();
    }
    
    @Get("/user/drivingEntry/:id")
    async searchDrivingEntriesByCarId(@Param("id")id : number) {
        return await this.userRepository.searchOneUserWithDrivinEntry(id);
    }

    @Get("/user/:name")
    async searchOneModelName(@Param("name") name: string) {
        return await this.userRepository.searchOneUserName(name);
    }
                   
    @Post("/user")
    async post(@Body() user: User) {
        return await this.userRepository.create(user);
    }

    

    @Delete("/user-delete/:id")
    async delete(@Param("id") id: number):Promise<DeleteResult> {
        return   await this.userRepository.delete(id);
    }

    @Put('/user-update/:id')
    async put(@Param('id') id: number, @Body() user: User) {
        return await this.userRepository.update(id,user)
    }

}