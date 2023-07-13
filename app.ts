interface Task {
    id: number;
    name: string;
    priority: string; 
    completed: boolean;
  }
  
  class TaskImpl implements Task {
    constructor(public id: number, public name: string, public priority: string, public completed: boolean) {}
  }
  
  class TaskList {
    private tasks: Task[];
  
    constructor() {
      this.tasks = [];
    }
  
    addTask(name: string, priority: string): void {
      const id = this.tasks.length + 1;
      const task = new TaskImpl(id, name, priority, false);
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
// Get the time header element
const headerElement = document.getElementById('date-time-header');

// Function to update the time
function updateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  if (headerElement) {
    headerElement.textContent = dateTimeString;
  }
}

// Update the time initially
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
 
  