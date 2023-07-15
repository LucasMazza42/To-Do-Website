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
// Get the time header element
var headerElement = document.getElementById('date-time-header');
// Function to update the time
function updateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    if (headerElement) {
        headerElement.textContent = dateTimeString;
    }
}
// Update the time initially
updateTime();
// Update the time every second
setInterval(updateTime, 1000);
//test update
var timerLabel = document.getElementById('clockTimer');
var timeInput = document.getElementById('time-input');
var startButton = document.getElementById('start-button');
var countdowntime = 0; // Initial countdown time
function startTimer() {
    // Parse the entered time from the input
    var enteredTime = parseInt(timeInput.value, 10);
    // Validate the entered time
    if (isNaN(enteredTime) || enteredTime <= 0) {
        alert('Please enter a valid time in seconds.');
        return;
    }
    // Set the countdown time to the entered value
    countdowntime = enteredTime;
    // Update the timer label initially
    if (timerLabel) {
        timerLabel.textContent = countdowntime.toString();
    }
}
function countstartTimer() {
    setInterval(function () {
        if (countdowntime > 1) {
            countdowntime--;
        }
        else {
            countdowntime = 10;
        }
        if (timerLabel) {
            timerLabel.textContent = countdowntime.toString();
        }
    }, 1000);
}
// Start the timer
startTimer();
