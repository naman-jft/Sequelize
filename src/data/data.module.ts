import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { dataProviders } from './data.providers';
import { DataService } from './data.service';
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [JwtModule.register({ secret: "key" })],
  controllers: [DataController],
  providers: [DataService,...dataProviders]
})
export class DataModule {}
