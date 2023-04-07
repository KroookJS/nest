export enum Status  {
  CREATED = 'created',
  ERROR = 'error',
}

export interface ITask {
    id: string;
    title: string;
    email: string;
    status: Status;
    tags: string[];
    createAt: Date;
    updateAt: Date;
}
