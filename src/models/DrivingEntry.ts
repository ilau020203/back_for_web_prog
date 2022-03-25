import {
    Column,
    Entity,
    ManyToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn    
} from 'typeorm';
import Car from './Car';
import User from './User';


@Entity()
export default class DrivingEntry {
    @PrimaryGeneratedColumn()
    id: number;

  
    @Column()
    car_id:  number;
    
    @Column({
        nullable: true,
    })
    user_id:  number;
    
    @Column({ type: 'timestamptz' }) 
    date: Date;

    @ManyToOne(() => Car, car => car.drivingEntries)
    car: Car;

    @ManyToOne(() => User, user => user.drivingEntries)
    user: User;
}
