import { Body, Controller, Get, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from 'src/schemas/test.schema';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TestController {
  constructor(private readonly testService: TestService) {}

  @MessagePattern({ cmd: 'create_test' })
  async createTest(createTestDto: Test): Promise<Test> {
    return this.testService.create(createTestDto);
  }

  @MessagePattern({ cmd: 'get_tests' })
  async getTests(): Promise<Test[]> {
    return this.testService.findAll();
  }

  @Post('test')
  async create(@Body() createTestDto: Test): Promise<Test> {
    return this.testService.create(createTestDto);
  }

  @Get('test')
  async findAll(): Promise<Test[]> {
    return this.testService.findAll();
  }
}
