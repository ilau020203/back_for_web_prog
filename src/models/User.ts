import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn    
} from 'typeorm';
import DrivingEntry from './DrivingEntry';


@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'date' })
    date: string;
    
    @OneToMany(() => DrivingEntry, drivingEntry => drivingEntry.user)
    drivingEntries: DrivingEntry[];
}
