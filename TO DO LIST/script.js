function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');

  const taskRow = document.createElement('div');
  taskRow.className = 'task-row';

  const span = document.createElement('span');
  span.textContent = taskText;

  const actionDiv = document.createElement('div');
  actionDiv.className = 'task-actions';

  const statusBtn = document.createElement('button');
  statusBtn.textContent = '✓';
  statusBtn.className = 'status-btn';
  statusBtn.onclick = () => {
    span.classList.toggle('completed');
  };

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.className = 'edit-btn';
  editBtn.onclick = () => {
    const updated = prompt('Edit your task:', span.textContent);
    if (updated !== null) span.textContent = updated;
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => li.remove();

  actionDiv.appendChild(statusBtn);
  actionDiv.appendChild(editBtn);
  actionDiv.appendChild(deleteBtn);

  taskRow.appendChild(span);
  taskRow.appendChild(actionDiv);

  li.appendChild(taskRow);
  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
}
