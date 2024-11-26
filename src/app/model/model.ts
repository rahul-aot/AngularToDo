export class ILogin {
  username: string;
  password: string;
  constructor() {
    this.username = '';
    this.password = '';
  }
}
export interface Task {
  id: number;
  title: string;
  description?: string; // optional field for task description
  completed: boolean;
}
export interface TaskList {
  tasks: Task[];
}
