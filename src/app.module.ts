import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { dataProviders } from './data/data.providers';
import { DatabaseModule } from './database/database.module';
import { LoggerMiddleware } from './logger.middleware';
import { DataController } from './data/data.controller';
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [DataModule, DatabaseModule,JwtModule.register({ secret: "key" })],
  controllers: [AppController],
  providers: [AppService,...dataProviders],
})

export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(LoggerMiddleware)
      .exclude(
        {path: 'data/jwt', method: RequestMethod.POST}
      )
      .forRoutes(DataController);
  }
 }