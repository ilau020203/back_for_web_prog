import {Service} from "typedi";
import Car from "../models/Car";
import DrivingEntry from "../models/DrivingEntry";
import {DeleteResult, getConnection} from "typeorm";

@Service()
export class CarRepository{

   

    async findAll(): Promise<Car[]> {
        return await getConnection().getRepository(Car).find();
    }
    
    async searchDrivingEntryByCarID( car_id: number) : Promise<DrivingEntry[]>  {
        return await getConnection().getRepository(DrivingEntry).find({where :{ car_id } });
    }       
    
    async searchOneCarBrend(brend: string) {
        return await getConnection().getRepository(Car).findOne({where :{ brend } });
    }
    async searchOneCarWithrivingEntry(id_driving_entry: number) {
        return await getConnection().getRepository(Car).createQueryBuilder("car")
        .leftJoinAndSelect("car.drivingEntries", "drivingEntry")
        .where("car.id = :id", { id:id_driving_entry})
        .getOne()
    }
    
    async searchManyCarBrend( brend: string) {
        return await getConnection().getRepository(Car).find({where :{ brend } });
    }              
    
    async create( car: Car) {
        return await getConnection().getRepository(Car).save(car);
    }
  
    async delete( id: number):Promise<DeleteResult> {
        return await getConnection().getRepository(Car).createQueryBuilder()
        .delete()
        .from(Car)
        .where("id = :id", { id })
        .execute();
    }

    
    async put( id: number,  car: Car) {
        return await getConnection().getRepository(Car).createQueryBuilder()
        .update(Car)
        .set(car)
        .where("id = :id", { id: 1 })
        .execute()
    }

}