import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { dataProviders } from './data.providers';
import { DataService } from './data.service';

@Module({
  controllers: [DataController],
  providers: [DataService,...dataProviders]
})
export class DataModule {}
