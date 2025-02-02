var task_list = [];

let proj = document.getElementById("proj");
let tasks = document.getElementById("tasks");
let due = document.getElementById("due");
let desc = document.getElementById("desc");
let priority = document.getElementById("priority");

const submit_btn = document.getElementById("submit");
const projects = document.getElementById("projects");

// Constructor Function for Task objects
function Task(proj,tasks,desc,due,priority) {
    this.proj_title = proj.value;
    this.tasks_list = tasks.value;
    this.dueDate = due.value;
    this.description = desc.value;
    this.priority = priority.value;
  }

// creates Task from form data
function createTask() {
    const task = new Task(proj,tasks,desc,due,priority);
    task_list.push(task)

    displayList();
}

function displayList() {
    projects.textContent = ""; // Clear previous tasks

    task_list.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.textContent = `
        Project ${index + 1}: ${task.proj_title} | 
        Task: ${task.tasks_list} | 
        Description: ${task.description} | 
        Due: ${task.dueDate} | 
        Priority: ${task.priority}`
        ;
        projects.appendChild(taskItem);
    });
}

submit_btn.addEventListener("click", createTask); 
submit_btn.addEventListener("click", displayList); 