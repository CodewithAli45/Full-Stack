let tasks = [];

function addTask() {
    const taskInput = document.getElementById('todoInput');
    const task = taskInput.value;

    if(task.trim() !== ''){
        tasks.push(task);
        taskInput.value = '';
        displayTask();
    }
}

function displayTask() {
    const list = document.getElementById("todoList");
    list.innerHTML = '';

    tasks.forEach((task, index) => {
        let taskNumber = index + 1;
        let listItem = document.createElement('li');
        list.textContent = taskNumber + ". " + task;
        list.appendChild(listItem);
    })
}
const btn = document.getElementById('addButton');
btn.addEventListener('click', addTask)