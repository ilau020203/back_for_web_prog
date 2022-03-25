import {
    PostgresConnectionOptions
} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import User from './models/User'
import Car from './models/Car'
import DrivingEntry from './models/DrivingEntry'

const typeOrmConfig: PostgresConnectionOptions = {

    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "ilau",
    
    password: "ilau020203",
    database: "voenca",
    synchronize: true,
    logging: false,
   
    entities: [
        User,
        Car,
        DrivingEntry
    ],
  
};

export { typeOrmConfig };
//"src/entity/*.ts"