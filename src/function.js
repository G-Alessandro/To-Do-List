import tasksArray from './tasks';
import editIcon from './assets/icons/edit-icon.svg';
import removeIcon from './assets/icons/remove-icon.svg';

const tasksContainer = document.createElement('div');
tasksContainer.classList.add('tasks-container');

const allTaskAmount = document.createElement('div');
allTaskAmount.classList.add('tasks-amount');

// function todayTask

function allTask() {
  for (let i = 0; i < tasksArray.length; i += 1) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    tasksContainer.appendChild(taskDiv);

    const priorityDiv = document.createElement('div');
    if (tasksArray[i].priority === 1) {
      priorityDiv.style.backgroundColor = '#fc7272';
    }
    if (tasksArray[i].priority === 2) {
      priorityDiv.style.backgroundColor = '#ffb773';
    }
    if (tasksArray[i].priority === 3) {
      priorityDiv.style.backgroundColor = '#66ce66';
    }
    priorityDiv.style.borderRadius = '8px 0px 0px 8px';
    taskDiv.appendChild(priorityDiv);

    const taskCheckbox = document.createElement('input');
    taskCheckbox.classList.add('task-checkbox');
    taskCheckbox.setAttribute('type', 'checkbox');
    taskDiv.appendChild(taskCheckbox);

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskDiv.appendChild(taskTitle);
    taskTitle.innerText = tasksArray[i].title;

    const detailsBtn = document.createElement('button');
    detailsBtn.classList.add('detail-btn');
    taskDiv.appendChild(detailsBtn);
    detailsBtn.innerText = 'Details';

    const taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    taskDiv.appendChild(taskDate);
    taskDate.innerText = tasksArray[i].date;

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    taskDiv.appendChild(editBtn);
    const editImg = document.createElement('img');
    editImg.classList.add('edit-image');
    editBtn.appendChild(editImg);
    editImg.src = editIcon;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    taskDiv.appendChild(removeBtn);
    const removeImg = document.createElement('img');
    removeImg.classList.add('remove-image');
    removeBtn.appendChild(removeImg);
    removeImg.src = removeIcon;

    allTaskAmount.innerText = tasksArray.length;
  }
  console.log('test', tasksArray.length);
}

export { tasksContainer, allTaskAmount, allTask };
