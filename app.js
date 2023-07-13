var TaskImpl = /** @class */ (function () {
    function TaskImpl(id, name, completed) {
        this.id = id;
        this.name = name;
        this.completed = completed;
    }
    return TaskImpl;
}());
var TaskList = /** @class */ (function () {
    function TaskList() {
        this.tasks = [];
    }
    TaskList.prototype.addTask = function (name) {
        var id = this.tasks.length + 1;
        var task = new TaskImpl(id, name, false);
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
