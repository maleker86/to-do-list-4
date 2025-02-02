var task_list = [];

// Constructor Function for Task objects
function Task(proj,tasks,desc,due,priority) {
    this.proj_title = proj;
    this.tasks_list = tasks;
    this.dueDate = due;
    this.description = desc;
    this.priority = priority;
  }

// Create a Person object
const task1 = new Task("do dishes",["wash plate","wash fork"],"make sink clean",2/5/2025,1);

// Display age
console.log("My project is " + task1.proj_title + " and it involves " + task1.tasks_list);
console.log(task1);
