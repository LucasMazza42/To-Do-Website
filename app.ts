interface Task {
    id: number;
    name: string;
    completed: boolean;
  }
  
  class TaskImpl implements Task {
    constructor(public id: number, public name: string, public completed: boolean) {}
  }
  
  class TaskList {
    private tasks: Task[];
  
    constructor() {
      this.tasks = [];
    }
  
    addTask(name: string): void {
      const id = this.tasks.length + 1;
      const task = new TaskImpl(id, name, false);
      this.tasks.push(task);
    }
  
    removeTask(id: number): void {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  
    markTaskComplete(id: number): void {
        for (const task of this.tasks) {
          if (task.id === id) {
            task.completed = true;
            break;
          }
        }
      }
      
  
    getAllTasks(): Task[] {
      return this.tasks;
    }
  }
  