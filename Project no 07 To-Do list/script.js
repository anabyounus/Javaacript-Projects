document.addEventListener('DOMContentLoaded', loadTodos);
document.getElementById('add-btn').addEventListener('click', addTask);
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', filterTasks);
});

function addTask() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== '') {
        createTaskElement(task);
        saveTaskToLocalStorage(task);
        input.value = '';
    }
}

function createTaskElement(task, completed = false) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if (completed) {
        li.classList.add('completed');
    }
    li.textContent = task;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
        updateTaskStatusInLocalStorage(task, li.classList.contains('completed'));
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
        li.remove();
        removeTaskFromLocalStorage(task);
    });

    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    document.getElementById('todo-list').appendChild(li);
}

function filterTasks(event) {
    const filter = event.target.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    document.querySelectorAll('.todo-item').forEach(item => {
        switch (filter) {
            case 'all':
                item.style.display = 'flex';
                break;
            case 'active':
                item.style.display = item.classList.contains('completed') ? 'none' : 'flex';
                break;
            case 'completed':
                item.style.display = item.classList.contains('completed') ? 'flex' : 'none';
                break;
        }
    });
}

function saveTaskToLocalStorage(task, completed = false) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push({ task, completed });
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        createTaskElement(todo.task, todo.completed);
    });
}

function updateTaskStatusInLocalStorage(task, completed) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedTodos = todos.map(todo => {
        if (todo.task === task) {
            return { ...todo, completed };
        }
        return todo;
    });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
}

function removeTaskFromLocalStorage(task) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(todo => todo.task !== task);
    localStorage.setItem('todos', JSON.stringify(todos));
}
