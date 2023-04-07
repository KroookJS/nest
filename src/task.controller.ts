import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ITask } from './task.interface';
import { EmailPipse } from './pipes/email.pipe';


@Controller('api')
export class TaskController {
  constructor(private readonly TaskService: TaskService) {}
  @Get('task')
  getTest(): ITask[] {
    return this.TaskService.getTask();
  }

  @Get('task/:id')
  getUserId(@Param('id') id: string): ITask {
    return this.TaskService.getTaskId(id);
  }

  @UsePipes(new ValidationPipe())
  @Post('task')
  @HttpCode(202)
  getPostPost(@Body() post: CreateTaskDto): ITask {
    return this.TaskService.createTask(post)
  }

  @Delete('task/:id')
  deleteTask(@Param('id')id: string): ITask[] {
    return this.TaskService.deleteTaskById(id)
  }

  @Patch("task/:id")
  updateTask(@Param('id')id: string, @Body('name')name: string): ITask {
    return this.TaskService.updateTaskById(id, name)
  }
  
  @Get('task/:email')
  getEmailTask(@Param('email', EmailPipse)email: string): ITask[] {
    return this.TaskService.getTaskEmail(email) 
  }
}

@Controller('')
export class AppController {
  @Get()
  getPost(): string {
    return 'Фиксируй все, ты всегда в тонусе';
  }
}