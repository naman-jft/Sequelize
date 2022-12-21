import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { dataProviders } from './data/data.providers';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DataModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService,...dataProviders],
})
export class AppModule {}
