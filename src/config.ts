import {
    PostgresConnectionOptions
} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import User from './models/User'


const typeOrmConfig: PostgresConnectionOptions = {

    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "ilau",
    
    password: "ilau020203",
    database: "project_student",
    synchronize: true,
    logging: false,
   
    entities: [
        User,
      
    ],
  
};

export { typeOrmConfig };
//"src/entity/*.ts"