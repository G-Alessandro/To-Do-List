import tasksArray from './tasks';
import editIcon from './assets/icons/edit-icon.svg';
import removeIcon from './assets/icons/remove-icon.svg';

const body = document.getElementsByTagName('body')[0];

const tasksContainer = document.createElement('div');
tasksContainer.classList.add('tasks-container');

const allTaskAmount = document.createElement('div');
allTaskAmount.classList.add('tasks-amount');

const todayTaskAmount = document.createElement('div');
todayTaskAmount.classList.add('tasks-amount');

const sevenDayTaskAmount = document.createElement('div');
sevenDayTaskAmount.classList.add('tasks-amount');

// function todayTask() {

// }

function totalTasks() {
  let todayTasksTotal = 0;
  let weekTasksTotal = 0;
  allTaskAmount.innerText = tasksArray.length;
  for (let i = 0; i < tasksArray.length; i += 1) {
    if (tasksArray[i].date === '2023-06-08') {
      todayTasksTotal += 1;
      todayTaskAmount.innerText = todayTasksTotal;
    }
    if (tasksArray[i].date === '2023-06-08') {
      weekTasksTotal += 1;
      sevenDayTaskAmount.innerText = weekTasksTotal;
    }
  }
}

function seeDetailsTask(obj) {
  const detailsTaskContainer = document.createElement('div');
  detailsTaskContainer.classList.add('details-task-container');
  body.appendChild(detailsTaskContainer);

  const detailTaskTitle = document.createElement('h1');
  detailsTaskContainer.appendChild(detailTaskTitle);
  detailTaskTitle.innerText = obj.title;

  const detailTaskDescContainer = document.createElement('div');
  detailTaskDescContainer.classList.add('details-task');
  detailsTaskContainer.appendChild(detailTaskDescContainer);

  const detailTaskDescTitle = document.createElement('h2');
  detailTaskDescContainer.appendChild(detailTaskDescTitle);
  detailTaskDescTitle.innerText = 'Description :';

  const detailTaskDesc = document.createElement('p');
  detailTaskDescContainer.appendChild(detailTaskDesc);
  detailTaskDesc.innerText = obj.description;

  const detailTaskDateContainer = document.createElement('div');
  detailTaskDateContainer.classList.add('details-task');
  detailsTaskContainer.appendChild(detailTaskDateContainer);

  const detailTaskDateTitle = document.createElement('h2');
  detailTaskDateContainer.appendChild(detailTaskDateTitle);
  detailTaskDateTitle.innerText = 'Due Date :';

  const detailTaskDate = document.createElement('p');
  detailTaskDateContainer.appendChild(detailTaskDate);
  detailTaskDate.innerText = obj.date;

  const detailTaskProjectContainer = document.createElement('div');
  detailTaskProjectContainer.classList.add('details-task');
  detailsTaskContainer.appendChild(detailTaskProjectContainer);

  const detailTaskProjectTitle = document.createElement('h2');
  detailTaskProjectContainer.appendChild(detailTaskProjectTitle);
  detailTaskProjectTitle.innerText = 'Project :';

  const detailTaskProject = document.createElement('p');
  detailTaskProjectContainer.appendChild(detailTaskProject);
  detailTaskProject.innerText = obj.projects;

  const detailTaskPriorityContainer = document.createElement('div');
  detailTaskPriorityContainer.classList.add('details-task');
  detailsTaskContainer.appendChild(detailTaskPriorityContainer);

  const detailTaskPriorityTitle = document.createElement('h2');
  detailTaskPriorityContainer.appendChild(detailTaskPriorityTitle);
  detailTaskPriorityTitle.innerText = 'Priority :';

  const detailTaskPriority = document.createElement('p');
  detailTaskPriorityContainer.appendChild(detailTaskPriority);
  detailTaskPriority.innerText = obj.priority;
}

function allTask() {
  for (let i = 0; i < tasksArray.length; i += 1) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    tasksContainer.appendChild(taskDiv);

    const priorityDiv = document.createElement('div');
    if (tasksArray[i].priority === 'Low') {
      priorityDiv.style.backgroundColor = '#fc7272';
    }
    if (tasksArray[i].priority === 'Medium') {
      priorityDiv.style.backgroundColor = '#ffb773';
    }
    if (tasksArray[i].priority === 'High') {
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

    detailsBtn.addEventListener('click', () => {
      seeDetailsTask(tasksArray[i]);
    });

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

    totalTasks();
  }
  console.log('test');
}

export {
  tasksContainer, allTaskAmount, todayTaskAmount, sevenDayTaskAmount, allTask,
};
