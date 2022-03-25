// Must be at top
import 'reflect-metadata';
import {createExpressServer, useContainer, useExpressServer} from "routing-controllers";
import {Container} from "typedi";
import {CarConntroller} from './controllers/CarConntroller'
import {UserConntroller} from './controllers/UserController'
import {DrivingEntryConntroller} from './controllers/DrivingEntryController'
import { createConnection } from 'typeorm';
import {getConnection} from "typeorm";
import { typeOrmConfig } from './config';
import User from './models/User';
import Car from './models/Car';

/**
 * Start the express app.
 */


console.log("Server is up and running at port 3000");

(async () => {
    try {
        // const conn = await myDataSource.initialize()   
        const conn = await createConnection(typeOrmConfig);
        //mock data
        let rep = await conn.getRepository(User);
        let album2 = new User();
        album2.name = "Me";
        album2.date = "12.01.2002";
        album2 = await rep.save(album2);
        let rep1 = await conn.getRepository(Car);
        let album1 = new Car();
        album1.brend = "Meqqqqq";
        album1.owner_id = 1;
        album1 = await rep1.save(album1);
        console.log('PG connected. App is ready to do work.');
        /**
         * Setup routing-controllers to use typedi container.
         */
        useContainer(Container);

        /**
         * We create a new express server instance.
         * We could have also use useExpressServer here to attach controllers to an existing express instance.
         */
        const expressApp = createExpressServer({
            /**
             * We can add options about how routing-controllers should configure itself.
             * Here we specify what controllers should be registered in our express server.
             */
            controllers: [
                CarConntroller,
                UserConntroller,
                DrivingEntryConntroller,
            ]
        });

        

        expressApp.listen(3000);
        // await conn.close();
        console.log('PG connection closed.');
    } catch (error) {
        console.log(error)
    }
})();
