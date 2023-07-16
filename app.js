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
var endButton = document.getElementById('end-button');
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
    // Parse the entered time from the input (in minutes)
    var enteredTime = parseInt(timeInput.value, 10);
    // Convert the entered time to seconds
    countdownTime = enteredTime * 60;
    // Update the timer label initially
    if (timerLabel) {
        timerLabel.textContent = formatTime(countdownTime);
    }
    // Start the countdown
    countdownInterval = setInterval(function () {
        if (countdownTime > 0) {
            countdownTime--;
            if (timerLabel) {
                timerLabel.textContent = formatTime(countdownTime);
            }
        }
        else {
            clearInterval(countdownInterval);
            timerLabel.textContent = "Focus time over!";
        }
    }, 1000);
}
// Function to format the time in MM:SS format
function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    return "".concat(minutes, ":").concat(seconds);
}
function resetTime(time) {
    countdownTime = 0;
    timerLabel.textContent = "Focus time ended!";
    return countdownTime;
}
// Add event listener to the start button
if (startButton) {
    startButton.addEventListener('click', startTimer);
}
if (endButton) {
    endButton.addEventListener('click', resetTime);
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
