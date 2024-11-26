export class ILogin {
  username: string;
  password: string;
  constructor() {
    this.username = '';
    this.password = '';
  }
}
export class ITask {
  id: number;
  title: string;
  completed: boolean;
  constructor() {
    this.id = 0;
    this.title = '';
    this.completed = false;
  }
}
export class TaskList {
  tasks: ITask[];
  constructor() {
    this.tasks = [];
  }
}
