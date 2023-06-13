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

// Function to show the quantities of tasks
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

// Function to change priority color
function priorityDivColor(priorityId, priority) {
  const priorityColor = priorityId;
  if (priority === 'Low') {
    priorityColor.style.backgroundColor = '#66ce66';
  }
  if (priority === 'Medium') {
    priorityColor.style.backgroundColor = '#ffb773';
  }
  if (priority === 'High') {
    priorityColor.style.backgroundColor = '#fc7272';
  }
}

// Function to edit the details of the task
function editTask(obj, taskId, titleId, priorityId) {
  const editTaskBackground = document.createElement('div');
  editTaskBackground.classList.add('edit-task-background');
  body.appendChild(editTaskBackground);

  const editTaskContainer = document.createElement('div');
  editTaskContainer.classList.add('edit-task-container');
  editTaskBackground.appendChild(editTaskContainer);

  const editTaskTitle = document.createElement('h3');
  editTaskContainer.appendChild(editTaskTitle);
  editTaskTitle.innerText = 'Title :';

  const editTaskTitleText = document.createElement('textarea');
  editTaskTitleText.classList.add('edit-task-title-text');
  editTaskTitleText.setAttribute('rows', '1');
  editTaskTitleText.setAttribute('cols', '60');
  editTaskContainer.appendChild(editTaskTitleText);
  editTaskTitleText.innerText = obj.title;

  const editTaskDescriptionTitle = document.createElement('h3');
  editTaskContainer.appendChild(editTaskDescriptionTitle);
  editTaskDescriptionTitle.innerText = 'Description :';

  const editTaskDescriptionText = document.createElement('textarea');
  editTaskDescriptionText.classList.add('edit-task-description-text');
  editTaskDescriptionText.setAttribute('rows', '6');
  editTaskDescriptionText.setAttribute('cols', '60');
  editTaskContainer.appendChild(editTaskDescriptionText);
  editTaskDescriptionText.innerText = obj.description;

  const editTimePriorityContainer = document.createElement('div');
  editTimePriorityContainer.classList.add('edit-time-priority-container');
  editTaskContainer.appendChild(editTimePriorityContainer);

  const editTimeContainer = document.createElement('div');
  editTimeContainer.classList.add('edit-time-container');
  editTimePriorityContainer.appendChild(editTimeContainer);

  const editTaskDateTitle = document.createElement('h3');
  editTimeContainer.appendChild(editTaskDateTitle);
  editTaskDateTitle.innerText = 'Duo Date :';

  const editTaskDate = document.createElement('textarea');
  editTaskDate.classList.add('edit-task-date-text');
  editTimeContainer.appendChild(editTaskDate);
  editTaskDate.innerText = obj.date;

  // Edit Task Date Function

  const editPriorityContainer = document.createElement('div');
  editPriorityContainer.classList.add('edit-priority-container');
  editTimePriorityContainer.appendChild(editPriorityContainer);

  const editTaskPriorityTitle = document.createElement('h3');
  editPriorityContainer.appendChild(editTaskPriorityTitle);
  editTaskPriorityTitle.innerText = 'Priority :';

  const editPriorityBtnContainer = document.createElement('div');
  editPriorityBtnContainer.classList.add('edit-priority-btn-container');
  editPriorityContainer.appendChild(editPriorityBtnContainer);

  const editPriorityBtnLow = document.createElement('button');
  editPriorityBtnLow.classList.add('edit-priority-btn-low');
  editPriorityBtnContainer.appendChild(editPriorityBtnLow);
  editPriorityBtnLow.innerText = 'Low';

  const editPriorityBtnMedium = document.createElement('button');
  editPriorityBtnMedium.classList.add('edit-priority-btn-medium');
  editPriorityBtnContainer.appendChild(editPriorityBtnMedium);
  editPriorityBtnMedium.innerText = 'Medium';

  const editPriorityBtnHigh = document.createElement('button');
  editPriorityBtnHigh.classList.add('edit-priority-btn-high');
  editPriorityBtnContainer.appendChild(editPriorityBtnHigh);
  editPriorityBtnHigh.innerText = 'High';

  let priorityChoice = '';

  if (obj.priority === 'Low') {
    editPriorityBtnLow.classList.toggle('edit-priority-btn-low-toggle');
    priorityChoice = 'Low';
  }
  if (obj.priority === 'Medium') {
    editPriorityBtnMedium.classList.toggle('edit-priority-btn-medium-toggle');
    priorityChoice = 'Medium';
  }
  if (obj.priority === 'High') {
    editPriorityBtnHigh.classList.toggle('edit-priority-btn-high-toggle');
    priorityChoice = 'High';
  }

  editPriorityBtnLow.addEventListener('click', () => {
    if (editPriorityBtnLow.classList.toggle('edit-priority-btn-low-toggle') === false) {
      editPriorityBtnLow.classList.toggle('edit-priority-btn-low-toggle');
    }
    if (editPriorityBtnMedium.classList.toggle('edit-priority-btn-medium-toggle') === true) {
      editPriorityBtnMedium.classList.toggle('edit-priority-btn-medium-toggle');
    }
    if (editPriorityBtnHigh.classList.toggle('edit-priority-btn-high-toggle') === true) {
      editPriorityBtnHigh.classList.toggle('edit-priority-btn-high-toggle');
    }
    priorityChoice = 'Low';
  });

  editPriorityBtnMedium.addEventListener('click', () => {
    if (editPriorityBtnMedium.classList.toggle('edit-priority-btn-medium-toggle') === false) {
      editPriorityBtnMedium.classList.toggle('edit-priority-btn-medium-toggle');
    }
    if (editPriorityBtnLow.classList.toggle('edit-priority-btn-low-toggle') === true) {
      editPriorityBtnLow.classList.toggle('edit-priority-btn-low-toggle');
    }
    if (editPriorityBtnHigh.classList.toggle('edit-priority-btn-high-toggle') === true) {
      editPriorityBtnHigh.classList.toggle('edit-priority-btn-high-toggle');
    }
    priorityChoice = 'Medium';
  });

  editPriorityBtnHigh.addEventListener('click', () => {
    if (editPriorityBtnHigh.classList.toggle('edit-priority-btn-high-toggle') === false) {
      editPriorityBtnHigh.classList.toggle('edit-priority-btn-high-toggle');
    }
    if (editPriorityBtnLow.classList.toggle('edit-priority-btn-low-toggle') === true) {
      editPriorityBtnLow.classList.toggle('edit-priority-btn-low-toggle');
    }
    if (editPriorityBtnMedium.classList.toggle('edit-priority-btn-medium-toggle') === true) {
      editPriorityBtnMedium.classList.toggle('edit-priority-btn-medium-toggle');
    }
    priorityChoice = 'High';
  });

  const editConfirmBtn = document.createElement('button');
  editConfirmBtn.classList.add('edit-confirm-btn');
  editTaskContainer.appendChild(editConfirmBtn);
  editConfirmBtn.innerText = 'Confirm Edit';
  editConfirmBtn.addEventListener('click', () => {
    obj.title = editTaskTitleText.value;
    obj.description = editTaskDescriptionText.value;
    obj.date = editTaskDate.value;
    obj.priority = priorityChoice;
    editTaskBackground.remove();
    titleId.innerText = obj.title;
    taskId.setAttribute('data', `${obj.title}`);
    priorityDivColor(priorityId, priorityChoice);
  });
}

// Function to see the details of the task
function seeDetailsTask(obj) {
  const detailsTaskBackground = document.createElement('div');
  detailsTaskBackground.classList.add('details-task-background');
  body.appendChild(detailsTaskBackground);

  const detailsTaskContainer = document.createElement('div');
  detailsTaskContainer.classList.add('details-task-container');
  detailsTaskBackground.appendChild(detailsTaskContainer);

  const closeDetailBtn = document.createElement('button');
  closeDetailBtn.classList.add('close-detail-btn');
  detailsTaskContainer.appendChild(closeDetailBtn);
  closeDetailBtn.innerText = 'X';
  closeDetailBtn.addEventListener('click', () => {
    detailsTaskContainer.remove();
    detailsTaskBackground.remove();
  });

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
  if (obj.priority === 'Low') {
    detailTaskPriority.style.backgroundColor = '#66ce66';
  }
  if (obj.priority === 'Medium') {
    detailTaskPriority.style.backgroundColor = '#ffb773';
  }
  if (obj.priority === 'High') {
    detailTaskPriority.style.backgroundColor = '#fc7272';
  }
}

function allTask() {
  for (let i = 0; i < tasksArray.length; i += 1) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    taskDiv.setAttribute('id', `task-div-${i}`);
    taskDiv.setAttribute('data', `${tasksArray[i].title}`);
    tasksContainer.appendChild(taskDiv);

    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('task-priority');
    priorityDiv.setAttribute('id', `task-priority-${i}`);
    if (tasksArray[i].priority === 'Low') {
      priorityDiv.style.backgroundColor = '#66ce66';
    }
    if (tasksArray[i].priority === 'Medium') {
      priorityDiv.style.backgroundColor = '#ffb773';
    }
    if (tasksArray[i].priority === 'High') {
      priorityDiv.style.backgroundColor = '#fc7272';
    }
    priorityDiv.style.borderRadius = '8px 0px 0px 8px';
    taskDiv.appendChild(priorityDiv);

    const taskCheckbox = document.createElement('input');
    taskCheckbox.classList.add('task-checkbox');
    taskCheckbox.setAttribute('type', 'checkbox');
    taskDiv.appendChild(taskCheckbox);

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.setAttribute('id', `task-title-${i}`);
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

    const taskId = document.getElementById(`task-div-${i}`);
    const taskPriorityId = document.getElementById(`task-priority-${i}`);
    const taskTitleId = document.getElementById(`task-title-${i}`);
    editBtn.addEventListener('click', () => {
      editTask(tasksArray[i], taskId, taskTitleId, taskPriorityId);
    });

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    taskDiv.appendChild(removeBtn);
    const removeImg = document.createElement('img');
    removeImg.classList.add('remove-image');
    removeBtn.appendChild(removeImg);
    removeImg.src = removeIcon;

    removeBtn.addEventListener('click', () => {
      for (let e = 0; e < tasksArray.length; e += 1) {
        const taskDivData = taskDiv.getAttribute('data');
        const taskTitleDel = tasksArray[e].title;
        const taskArrayFind = tasksArray.find(({ title }) => title === taskDivData);
        const taskArrayIndex = tasksArray.indexOf(taskArrayFind);
        if (taskTitleDel === taskDivData) {
          tasksArray.splice(taskArrayIndex, 1);
          taskDiv.remove();
        }
      }
    });

    totalTasks();
  }
  console.log('test');
}

export {
  tasksContainer, allTaskAmount, todayTaskAmount, sevenDayTaskAmount, allTask,
};
