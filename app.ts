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

function updateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  const headerElement = document.getElementById('date-time-header');
  if (headerElement) {
    headerElement.textContent = dateTimeString;
  }
}

// Update the time initially
updateTime();

// Update the time every second
setInterval(updateTime, 1000);

const timerLabel = document.getElementById('clockTimer');
const timeInput = document.getElementById('time-input');
const startButton = document.getElementById('start-button');
let countdownTime: number = 0; // Initial countdown time
let countdownInterval: any; // Variable to store the interval

// Function to update the time
function updateTimer() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  const headerElement = document.getElementById('date-time-header');
  if (headerElement) {
    headerElement.textContent = dateTimeString;
  }
}

// Function to start the countdown timer
function startTimer() {
  // Parse the entered time from the input
  const enteredTime = parseInt((timeInput as HTMLInputElement).value, 10);

  // Set the countdown time to the entered value
  countdownTime = enteredTime;

  // Update the timer label initially
  if (timerLabel) {
    timerLabel.textContent = countdownTime.toString();
  }

  // Start the countdown
  countdownInterval = setInterval(() => {
    if (countdownTime > 1) {
      countdownTime--;
      if (timerLabel) {
        timerLabel.textContent = countdownTime.toString();
      }
    } else {
      clearInterval(countdownInterval);
      timerLabel.textContent = "Focus time over!";
    }
  }, 1000);
}

// Add event listener to the start button
if (startButton) {
  startButton.addEventListener('click', startTimer);
}
