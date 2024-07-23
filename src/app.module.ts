import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/ms-quiz'),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
