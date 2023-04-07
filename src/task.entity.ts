import { ITask, Status } from './task.interface';

export class Task implements ITask {
    title: string;
    email: string;
    tags: string[];
    status: Status = Status.CREATED;
    id = String(new Date().getTime());
    createAt: Date = new Date();
    updateAt: Date = new Date();
    constructor(title: string, email: string, tags?: string[], status?: Status ){
        this.title = title;
        this.email = email || null
        this.tags = tags;   
        this.status = status
    }
}

   