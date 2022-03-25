import {Service} from "typedi";
import User from "../models/User";
import {DeleteResult, getConnection} from "typeorm";

@Service()
export class UserRepository{

    async findAll(): Promise<User[]> {
        return await getConnection().getRepository(User).find();
    }
    
    async searchOneUserByDrivingEntry(id_driving_entry: number) {
        return await getConnection().getRepository(User).findOne({where :{drivingEntries:{ id:id_driving_entry} } });
    }

    async searchOneUserWithDrivinEntry(user_id: number) {
        return await getConnection().getRepository(User).createQueryBuilder("user")
        .leftJoinAndSelect("user.drivingEntries", "drivingEntry")
        .where("user.id = :id", { id:user_id})
        .getOne();
    }

    async searchOneUserName(name: string) {
        return await getConnection().getRepository(User).findOne({where :{ name } });
    }
    
    async searchManyUserName( name: string) {
        return await getConnection().getRepository(User).find({where :{ name } });
    }              
    
    async create( car: User) {
        return await getConnection().getRepository(User).save(car);
    }

  
    async delete( id: number):Promise<DeleteResult> {
        return await getConnection().getRepository(User).createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", { id })
        .execute();
    }

    
    async update( id: number,  user: User) {
        return await getConnection().getRepository(User).createQueryBuilder()
        .update(User)
        .set(user)
        .where("id = :id", { id: 1 })
        .execute()
    }

}