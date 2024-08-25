document.getElementById('addTask').onclick = function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim(); 

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete ಥ_ಥ';
        deleteButton.className = 'deleteBtn';
        deleteButton.onclick = function() {
            li.remove(); 
        };
        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
};
