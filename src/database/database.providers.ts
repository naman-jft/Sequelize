import { Sequelize } from 'sequelize-typescript';
import { User } from '../data/user.entity';


export const databaseProviders = [
    {
      provide: 'SEQUELIZE',
      useFactory: async () => {
        const sequelize = new Sequelize({
          dialect: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'naman1',
          password: '0123456789',
          database: 'test1',
        });
        sequelize.addModels([User]);
        await sequelize.sync();
        return sequelize;
      },
    },
  ];