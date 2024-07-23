import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from './../schemas/test.schema';

@Injectable()
export class TestService {
  constructor(@InjectModel('Test') private readonly testModel: Model<Test>) {}

  async create(test: Test): Promise<Test> {
    const createdTest = new this.testModel(test);
    return createdTest.save();
  }

  async findAll(): Promise<Test[]> {
    return this.testModel.find().exec();
  }
}
