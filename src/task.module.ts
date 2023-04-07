import { Module } from '@nestjs/common';
import { AppController, TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [],
  controllers: [TaskController, AppController],
  providers: [TaskService],
})
export class TaskModule {}
