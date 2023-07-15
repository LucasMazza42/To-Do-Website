var TaskImpl = /** @class */ (function () {
    function TaskImpl(id, name, priority, completed) {
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.completed = completed;
    }
    return TaskImpl;
}());
var TaskList = /** @class */ (function () {
    function TaskList() {
        this.tasks = [];
    }
    TaskList.prototype.addTask = function (name, priority) {
        var id = this.tasks.length + 1;
        var task = new TaskImpl(id, name, priority, false);
        this.tasks.push(task);
    };
    TaskList.prototype.removeTask = function (id) {
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
    };
    TaskList.prototype.markTaskComplete = function (id) {
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            if (task.id === id) {
                task.completed = true;
                break;
            }
        }
    };
    TaskList.prototype.getAllTasks = function () {
        return this.tasks;
    };
    return TaskList;
}());
function updateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    var headerElement = document.getElementById('date-time-header');
    if (headerElement) {
        headerElement.textContent = dateTimeString;
    }
}
// Update the time initially
updateTime();
// Update the time every second
setInterval(updateTime, 1000);
var timerLabel = document.getElementById('clockTimer');
var timeInput = document.getElementById('time-input');
var startButton = document.getElementById('start-button');
var countdownTime = 0; // Initial countdown time
var countdownInterval; // Variable to store the interval
// Function to update the time
function updateTimer() {
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    var headerElement = document.getElementById('date-time-header');
    if (headerElement) {
        headerElement.textContent = dateTimeString;
    }
}
// Function to start the countdown timer
function startTimer() {
    // Parse the entered time from the input
    var enteredTime = parseInt(timeInput.value, 10);
    // Set the countdown time to the entered value
    countdownTime = enteredTime;
    // Update the timer label initially
    if (timerLabel) {
        timerLabel.textContent = countdownTime.toString();
    }
    // Start the countdown
    countdownInterval = setInterval(function () {
        if (countdownTime > 1) {
            countdownTime--;
            if (timerLabel) {
                timerLabel.textContent = countdownTime.toString();
            }
        }
        else {
            clearInterval(countdownInterval);
            timerLabel.textContent = "Countdown finished!";
        }
    }, 1000);
}
// Add event listener to the start button
if (startButton) {
    startButton.addEventListener('click', startTimer);
}
