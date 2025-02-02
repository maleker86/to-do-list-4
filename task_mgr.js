var task_list = [];

let proj = document.getElementById("proj");
let tasks = document.getElementById("tasks");
let due = document.getElementById("due");
let desc = document.getElementById("desc");
let priority = document.getElementById("priority");

const submit_btn = document.getElementById("submit");
const projects = document.getElementById("projects");

// Constructor Function for Task objects
function Task(proj, tasks, desc, due, priority) {
  this.proj_title = proj.value;
  this.tasks_list = tasks.value.split(",").map((task) => task.trim()); // Convert to an array and trim spaces
  this.dueDate = due.value;
  this.description = desc.value;
  this.priority = priority.value;
}

function createProject() {
    if (proj.value == "") { return }

    createTask()
    displayList();
}

// creates Task from form data
function createTask() {
    const task = new Task(proj, tasks, desc, due, priority);
    task_list.push(task);
    console.log(task_list);
} 

function displayList() {
    projects.textContent = ""; // Clear previous tasks

    task_list.forEach((task) => {
        const task_div = document.createElement("div");
        const h1 = document.createElement("h1");
        const ol = document.createElement("ol");
        const listOfTasks = task.tasks_list;

        task_div.className = "task";

        h1.innerText = task.proj_title;

        if (listOfTasks[0] !== "") {
            // Loop through tasks and create list item
            listOfTasks.forEach((taskName) => {
                const li = document.createElement("li"); // Create a new <li> for each task
                li.innerText = taskName;
                ol.appendChild(li); // Add the <li> to the <ol>
            });
        }

        // Append elements to the page
        projects.appendChild(task_div); //item
        task_div.appendChild(h1); //proj title
        task_div.appendChild(ol); // append tasks ARRAY
    });
}

submit_btn.addEventListener("click", createProject);