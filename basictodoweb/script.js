// Task lists
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
            <input type="checkbox" onchange="completeTask(this)">
        `;
        pendingList.appendChild(li);
        taskInput.value = "";
    }
}

function completeTask(checkbox) {
    const taskItem = checkbox.parentElement;
    if (checkbox.checked) {
        taskItem.classList.add("completed");
        completedList.appendChild(taskItem);
    } else {
        taskItem.classList.remove("completed");
        pendingList.appendChild(taskItem);
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
