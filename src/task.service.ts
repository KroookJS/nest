import { BadRequestException, Injectable } from '@nestjs/common';

import { Task } from './task.entity';
import { ITask } from './task.interface';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  private task: ITask[] = [];
  getTask(): ITask[] {
    return this.task;
  }
  getTaskId(id: string): ITask {
    const task = this.task.find((item) => item.id === id);
    return task;
  }
  createTask({title, tags, status, email}: CreateTaskDto ): ITask {
    const task = new Task(title, email, tags, status, )
    this.task.push(task);
    return task;
  }
  deleteTaskById(id: string): ITask[] {
    const taskisDel = this.task.filter(item => item.id !== id)
    return taskisDel
  }

  updateTaskById(id: string, test: string): ITask {
    const task = this.task.find(item => item.id === id)
    const newTask = {...task, name: test}
    return newTask
  }
  getTaskEmail(email: string): ITask[] {
    const task = this.task.filter((item) => item.email === email)
    if(!task || task.length === 0) throw new BadRequestException('Вашь емайл не был найден')
    return task
  }
}
