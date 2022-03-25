import {
    Column,
    Entity,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn    
} from 'typeorm';
import DrivingEntry from './DrivingEntry';



@Entity()
export default class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brend: string;
    
    @Column()
    owner_id:  number;

    @OneToMany(() => DrivingEntry, drivingEntry => drivingEntry.car)
    drivingEntries: DrivingEntry[];
  
}
