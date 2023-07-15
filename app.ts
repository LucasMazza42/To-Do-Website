interface Task {
  id: number;
  name: string;
  priority: string;
  completed: boolean;
}

class TaskImpl implements Task {
  constructor(
    public id: number,
    public name: string,
    public priority: string,
    public completed: boolean
  ) {}
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
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  markTaskComplete(id: number): void {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.completed = true;
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
const endButton = document.getElementById('end-button');
let countdownTime: number = 0; // Initial countdown time
let countdownInterval: any; // Variable to store the interval

// Function to update the timer
function updateTimer() {
  if (timerLabel) {
    timerLabel.textContent = formatTime(countdownTime);
  }
}

// Function to start the countdown timer
function startTimer() {
  // Parse the entered time from the input (in minutes)
  const enteredTime = parseInt((timeInput as HTMLInputElement).value, 10);

  // Convert the entered time to seconds
  countdownTime = enteredTime * 60;

  // Update the timer label initially
  updateTimer();

  // Start the countdown
  countdownInterval = setInterval(() => {
    if (countdownTime > 0) {
      countdownTime--;
      updateTimer();
    } else {
      clearInterval(countdownInterval);
  
    }
  }, 1000);
}

// Function to reset the timer
function resetTime() {
  clearInterval(countdownInterval);
  countdownTime = 0;
  updateTimer();
}

// Function to format the time in MM:SS format
function formatTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Add event listener to the start button
if (startButton) {
  startButton.addEventListener('click', startTimer);
}

// Add event listener to the end button
if (endButton) {
  endButton.addEventListener('click', resetTime);
}
