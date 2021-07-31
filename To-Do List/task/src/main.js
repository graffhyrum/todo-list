let list = document.querySelector('ul');
let taskList;
function storeInLocal(){
    taskList = list.innerHTML;
    localStorage.setItem('taskList', taskList);
}
let tbutton = document.getElementById("add-task-button");
tbutton.addEventListener('click', addTask);

function addTask() {
    let myTaskList = document.getElementById("task-list").getElementsByTagName("li");
    let newTaskTitle = document.getElementById("input-task").value;
    if (newTaskTitle) { //checks for blank task name
        let boxNode = document.createElement('input');
        Object.assign(boxNode,{
            type: 'checkbox',
            className: "checkbox",
        });
        let textNode = document.createElement('span');
        Object.assign(textNode,{
            className: 'task',
        });
        textNode.innerHTML = newTaskTitle;
        let deleteNode = document.createElement('button');
        Object.assign(deleteNode,{
            className: 'delete-btn',
            id: "dlbt-l" + (myTaskList.length + 1),
        });
        deleteNode.innerHTML = "Delete";
        let newTask = document.createElement('li');
        Object.assign(newTask,{
            id: "tl-l" + (myTaskList.length + 1),
        })
        newTask.appendChild(boxNode);
        newTask.appendChild(textNode);
        newTask.appendChild(deleteNode);
        document.getElementById("task-list").appendChild(newTask);
        document.getElementById("input-task").value = "";
        storeInLocal();
    } else {
    }
}

function updateLocalStorage() {
    list.innerHTML = localStorage.getItem('taskList');
}

if(localStorage.getItem('taskList')){
    updateLocalStorage();
}
//delete button handler
let tasklist = document.getElementById('task-list');
tasklist.addEventListener('click',function(e) {
    if (e.target && e.target.className == 'delete-btn') {
        e.target.parentElement.remove();
        storeInLocal();
    }
});
// task completion strikethrough
tasklist.addEventListener('change',function(e) {
    if (e.target && e.target.className == 'checkbox') {
        e.target.nextSibling.classList.toggle('completed');
        storeInLocal();
    }
})