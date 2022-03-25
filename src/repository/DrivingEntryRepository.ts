import {Service} from "typedi";
import DrivingEntry from "../models/DrivingEntry";
import Car from "../models/Car";
import User from "../models/User";
import {DeleteResult, getConnection} from "typeorm";

@Service()
export class DrivingEntryRepository{

    async findAll(): Promise<DrivingEntry[]> {
        return await getConnection().getRepository(DrivingEntry).find();
    }
    
  

    async searchDrivingEntryByUserID(user_id: number) : Promise<DrivingEntry[]> {
        return await getConnection().getRepository(DrivingEntry).find({where :{ user_id } });
    }
    
    async searchDrivingEntryByCarID( car_id: number) : Promise<DrivingEntry[]>  {
        return await getConnection().getRepository(DrivingEntry).find({where :{ car_id } });
    }              
    
    async create( drivingEntry: DrivingEntry) {
        drivingEntry.car=await getConnection().getRepository(Car).findOne({where:{id:drivingEntry.car_id}})
        drivingEntry.user=await getConnection().getRepository(User).findOne({where:{id:drivingEntry.user_id}})
        return await getConnection().getRepository(DrivingEntry).save(drivingEntry);
    }

  
    async delete( id: number):Promise<DeleteResult> {
        return await getConnection().getRepository(DrivingEntry).createQueryBuilder()
        .delete()
        .from(DrivingEntry)
        .where("id = :id", { id })
        .execute();
    }

    
    // async update( id: number,  drivingEntry: DrivingEntry) {
    //     return await getConnection().getRepository(DrivingEntry).createQueryBuilder()
    //     .update(DrivingEntry)
    //     .set(drivingEntry)
    //     .where("id = :id", { id: 1 })
    //     .execute()
    // }

}