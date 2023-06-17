import tasksArray from './tasks';
import editIcon from './assets/icons/edit-icon.svg';
import removeIcon from './assets/icons/trash-can.svg';

const body = document.getElementsByTagName('body')[0];

const tasksContainer = document.createElement('div');
tasksContainer.classList.add('tasks-container');

const allTaskAmount = document.createElement('div');
allTaskAmount.classList.add('tasks-amount');

const todayTaskAmount = document.createElement('div');
todayTaskAmount.classList.add('tasks-amount');

const sevenDayTaskAmount = document.createElement('div');
sevenDayTaskAmount.classList.add('tasks-amount');

const todayDate = new Date();
const todayDay = todayDate.getDate();
const todayMonth = todayDate.getMonth() + 1;
const todayYear = todayDate.getFullYear();

// Function to change the color of the buttons
function btnColorChange(green, normal1, normal2) {
  const btn1 = document.getElementsByClassName(green)[0];
  const btn2 = document.getElementsByClassName(normal1)[0];
  const btn3 = document.getElementsByClassName(normal2)[0];
  btn1.style.backgroundColor = 'rgb(170, 255, 186)';
  btn2.style.backgroundColor = 'beige';
  btn3.style.backgroundColor = 'beige';
}

// Function to make the first letter of a string uppercase
function uppercaseString(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

// Function to remove tasks from taskContainer
function removeTask() {
  const divToRemove = document.querySelectorAll('.task-div');
  divToRemove.forEach((element) => element.remove());
  const btnToRemove = document.querySelectorAll('.project-btn');
  btnToRemove.forEach((element) => element.remove());
}

// Function to assign dates to tasks
function assignDate() {
  for (let i = 0; i < 10; i += 2) {
    tasksArray[i].day = todayDay + i;
    tasksArray[i + 1].day = todayDay + i;
    if (tasksArray[i].day.toString().length === 1) {
      tasksArray[i].day = `0${tasksArray[i].day}`;
      tasksArray[i + 1].day = tasksArray[i].day;
    }

    tasksArray[i].month = todayMonth;
    tasksArray[i + 1].month = todayMonth;
    if (tasksArray[i].month.toString().length === 1) {
      tasksArray[i].month = `0${tasksArray[i].month}`;
      tasksArray[i + 1].month = tasksArray[i].month;
    }
    tasksArray[i].year = todayYear;
    tasksArray[i + 1].year = todayYear;
  }
}

// Function for the name of the month
function monthName(objMonth) {
  let month = '';
  switch (objMonth) {
    case '01':
      month = 'Jan';
      break;
    case '02':
      month = 'Feb';
      break;
    case '03':
      month = 'Mar';
      break;
    case '04':
      month = 'Apr';
      break;
    case '05':
      month = 'May';
      break;
    case '06':
      month = 'Jun';
      break;
    case '07':
      month = 'Jul';
      break;
    case '08':
      month = 'Aug';
      break;
    case '09':
      month = 'Sep';
      break;
    case '10':
      month = 'Oct';
      break;
    case '11':
      month = 'Nov';
      break;
    case '12':
      month = 'Dec';
      break;
    // no default
  }
  return month;
}

// Function to show the quantities of tasks
function totalTasks() {
  allTaskAmount.innerText = tasksArray.length;
  let todayTasksTotal = 0;
  let weekTasksTotal = 0;

  for (let i = 0; i < tasksArray.length; i += 1) {
    let month = todayMonth;
    let day = todayDay;
    if (month.toString().length === 1) {
      month = `0${month}`;
    }
    if (day.toString().length === 1) {
      day = `0${day}`;
    }
    const objectDate = tasksArray[i].year + tasksArray[i].month + tasksArray[i].day;
    const currentDate = todayYear + month + day;
    if (objectDate === currentDate) {
      todayTasksTotal += 1;
    }
    if (Number(tasksArray[i].day) < day + 7) {
      weekTasksTotal += 1;
    }
  }
  todayTaskAmount.innerText = todayTasksTotal;
  sevenDayTaskAmount.innerText = weekTasksTotal;
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

// Function to edit the details of the task , taskId, titleId, priorityId, dateId
function editTask(obj, taskId, titleId, priorityId, dateId) {
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
  editTaskTitleText.setAttribute('required', '');
  editTaskTitleText.setAttribute('rows', '1');
  editTaskTitleText.setAttribute('cols', '60');
  editTaskContainer.appendChild(editTaskTitleText);
  editTaskTitleText.innerText = uppercaseString(obj.title);

  const editTaskDescriptionTitle = document.createElement('h3');
  editTaskContainer.appendChild(editTaskDescriptionTitle);
  editTaskDescriptionTitle.innerText = 'Description :';

  const editTaskDescriptionText = document.createElement('textarea');
  editTaskDescriptionText.classList.add('edit-task-description-text');
  editTaskDescriptionText.setAttribute('required', '');
  editTaskDescriptionText.setAttribute('rows', '6');
  editTaskDescriptionText.setAttribute('cols', '60');
  editTaskContainer.appendChild(editTaskDescriptionText);
  editTaskDescriptionText.innerText = uppercaseString(obj.description);

  const editTaskProjectTitle = document.createElement('h3');
  editTaskContainer.appendChild(editTaskProjectTitle);
  editTaskProjectTitle.innerText = 'Project :';

  const editTaskProject = document.createElement('textarea');
  editTaskProject.classList.add('edit-task-title-text');
  editTaskProject.setAttribute('rows', '1');
  editTaskProject.setAttribute('cols', '60');
  editTaskContainer.appendChild(editTaskProject);
  editTaskProject.innerText = uppercaseString(obj.project);

  const editTimePriorityContainer = document.createElement('div');
  editTimePriorityContainer.classList.add('edit-time-priority-container');
  editTaskContainer.appendChild(editTimePriorityContainer);

  const editTimeContainer = document.createElement('div');
  editTimeContainer.classList.add('edit-time-container');
  editTimePriorityContainer.appendChild(editTimeContainer);

  const editTaskDateTitle = document.createElement('h3');
  editTimeContainer.appendChild(editTaskDateTitle);
  editTaskDateTitle.innerText = 'Duo Date :';

  const editTaskDate = document.createElement('input');
  editTaskDate.setAttribute('type', 'date');
  editTaskDate.setAttribute('required', '');
  editTaskDate.classList.add('edit-task-date-input');
  editTimeContainer.appendChild(editTaskDate);
  editTaskDate.value = `${obj.year}-${obj.month}-${obj.day}`;

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

  // Confirm edit button
  const editConfirmBtn = document.createElement('button');
  editConfirmBtn.classList.add('edit-confirm-btn');
  editTaskContainer.appendChild(editConfirmBtn);
  editConfirmBtn.innerText = 'Confirm Edit';
  editConfirmBtn.addEventListener('click', () => {
    const object = obj;
    const idTitle = titleId;
    const date = dateId;
    object.title = editTaskTitleText.value;
    object.description = editTaskDescriptionText.value;
    object.project = editTaskProject.value;
    object.day = editTaskDate.value.slice(8, 10);
    object.month = editTaskDate.value.slice(5, 7);
    object.year = editTaskDate.value.slice(0, 4);
    date.innerText = `${monthName(object.month)}-${object.day}-${object.year}`;
    object.priority = priorityChoice;
    editTaskBackground.remove();
    idTitle.innerText = obj.title;
    taskId.setAttribute('data', `${obj.title}`);
    priorityDivColor(priorityId, priorityChoice);
    totalTasks();
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
  detailTaskTitle.innerText = uppercaseString(obj.title);

  const detailTaskDescContainer = document.createElement('div');
  detailTaskDescContainer.classList.add('details-task');
  detailsTaskContainer.appendChild(detailTaskDescContainer);

  const detailTaskDescTitle = document.createElement('h2');
  detailTaskDescContainer.appendChild(detailTaskDescTitle);
  detailTaskDescTitle.innerText = 'Description :';

  const detailTaskDesc = document.createElement('p');
  detailTaskDescContainer.appendChild(detailTaskDesc);
  detailTaskDesc.innerText = uppercaseString(obj.description);

  const detailTaskDateContainer = document.createElement('div');
  detailTaskDateContainer.classList.add('details-task');
  detailsTaskContainer.appendChild(detailTaskDateContainer);

  const detailTaskDateTitle = document.createElement('h2');
  detailTaskDateContainer.appendChild(detailTaskDateTitle);
  detailTaskDateTitle.innerText = 'Due Date :';

  const detailTaskDate = document.createElement('p');
  detailTaskDateContainer.appendChild(detailTaskDate);
  detailTaskDate.innerText = `${monthName(obj.month)}-${obj.day}-${obj.year}`;

  const detailTaskProjectContainer = document.createElement('div');
  detailTaskProjectContainer.classList.add('details-task');
  detailsTaskContainer.appendChild(detailTaskProjectContainer);

  const detailTaskProjectTitle = document.createElement('h2');
  detailTaskProjectContainer.appendChild(detailTaskProjectTitle);
  detailTaskProjectTitle.innerText = 'Project :';

  const detailTaskProject = document.createElement('p');
  detailTaskProjectContainer.appendChild(detailTaskProject);
  detailTaskProject.innerText = uppercaseString(obj.project);

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

// Function to create tasks in taskContainer
function allTask(objIndex, tasksQuantity) {
  const divToRemove = document.querySelectorAll('project-btn');
  divToRemove.forEach((element) => element.remove());
  for (let i = objIndex; i < tasksQuantity; i += 1) {
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
    taskDate.setAttribute('id', `task-date-${i}`);
    taskDiv.appendChild(taskDate);
    if (tasksArray[i].month === '' && tasksArray[i].day === '' && tasksArray[i].year === '') {
      assignDate();
    }
    taskDate.innerText = `${monthName(tasksArray[i].month)}-${tasksArray[i].day}-${tasksArray[i].year}`;

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
    const taskDateId = document.getElementById(`task-date-${i}`);
    editBtn.addEventListener('click', () => {
      editTask(tasksArray[i], taskId, taskTitleId, taskPriorityId, taskDateId);
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
      totalTasks();
    });
  }
}

// Function to add projects to the sidebar
function addProject() {
  const projectsArray = [];
  for (let i = 0; i < tasksArray.length; i += 1) {
    const projectValue = tasksArray[i].project;
    if (projectValue !== '') {
      if (projectsArray.includes(projectValue) === false) {
        projectsArray.push(projectValue);
      }
    }
  }
  const projectsContainer = document.getElementsByClassName('projects-container')[0];
  for (let i = 0; i < projectsArray.length; i += 1) {
    const projectBtn = document.createElement('button');
    projectsContainer.appendChild(projectBtn);
    projectBtn.classList.add('project-btn');
    projectBtn.setAttribute('id', `project-btn-${i}`);
    projectBtn.setAttribute('data', `${projectsArray[i]}`);
    projectBtn.innerText = uppercaseString(projectsArray[i]);
    const projectTaskTotal = document.createElement('div');
    projectTaskTotal.classList.add('tasks-amount');
    projectBtn.appendChild(projectTaskTotal);
    let totalTaskProject = 0;
    for (let e = 0; e < tasksArray.length; e += 1) {
      if (projectBtn.getAttribute('data') === tasksArray[e].project) {
        totalTaskProject += 1;
      }
    }
    projectTaskTotal.innerText = totalTaskProject;

    projectBtn.addEventListener('click', () => {
      for (let e = 0; e < projectsArray.length; e += 1) {
        const btnIdNoClicked = document.getElementById(`project-btn-${e}`);
        const homeBtn = document.getElementsByClassName('home-btn')[0];
        const todayBtn = document.getElementsByClassName('today-btn')[0];
        const weekBtn = document.getElementsByClassName('week-btn')[0];
        btnIdNoClicked.style.backgroundColor = 'beige';
        homeBtn.style.backgroundColor = 'beige';
        todayBtn.style.backgroundColor = 'beige';
        weekBtn.style.backgroundColor = 'beige';
      }
      const projectBtnId = document.getElementById(`project-btn-${i}`);
      projectBtnId.style.backgroundColor = 'rgb(170, 255, 186)';
      const divToRemove = document.querySelectorAll('.task-div');
      divToRemove.forEach((element) => element.remove());
      for (let x = 0; x < tasksArray.length; x += 1) {
        if (projectBtn.getAttribute('data') === tasksArray[x].project) {
          const y = x + 1;
          allTask(x, y);
        }
      }
    });
  }
}

// Function to show daily tasks
function todayTask() {
  let month = todayMonth;
  let day = todayDay;
  if (month.toString().length === 1) {
    month = `0${month}`;
  }
  if (day.toString().length === 1) {
    day = `0${day}`;
  }
  const fullDate = todayYear + month + day;
  for (let i = 0; i < tasksArray.length; i += 1) {
    const taskDate = tasksArray[i].year + tasksArray[i].month + tasksArray[i].day;
    if (taskDate === fullDate) {
      const x = i + 1;
      allTask(i, x);
    }
  }
}

// Function to show the tasks of the week
function weekTask() {
  let month = todayMonth;
  let day = todayDay;
  const week = day + 7;
  for (; day < week; day += 1) {
    if (month.toString().length === 1) {
      month = `0${month}`;
    }
    if (day.toString().length === 1) {
      day = `0${day}`;
    }
    const fullDate = todayYear + month + day;
    for (let i = 0; i < tasksArray.length; i += 1) {
      const taskDate = tasksArray[i].year + tasksArray[i].month + tasksArray[i].day;
      if (taskDate === fullDate) {
        const x = i + 1;
        allTask(i, x);
      }
    }
  }
}

// Function to create new task
function createNewTask() {
  const newTask = {
    title: '',
    description: '',
    priority: 'Low',
    project: '',
    day: '',
    month: '',
    year: '',
  };

  let month = todayMonth;
  let day = todayDay;
  if (month.toString().length === 1) {
    month = `0${month}`;
  }
  if (day.toString().length === 1) {
    day = `0${day}`;
  }

  newTask.day = day;
  newTask.month = month;
  newTask.year = todayYear;

  const editTaskBackground = document.createElement('div');
  editTaskBackground.classList.add('edit-task-background');
  body.appendChild(editTaskBackground);

  const editTaskContainer = document.createElement('div');
  editTaskContainer.classList.add('edit-task-container');
  editTaskBackground.appendChild(editTaskContainer);

  const closeDetailBtn = document.createElement('button');
  closeDetailBtn.classList.add('close-detail-btn');
  editTaskContainer.appendChild(closeDetailBtn);
  closeDetailBtn.innerText = 'X';
  closeDetailBtn.addEventListener('click', () => {
    editTaskContainer.remove();
    editTaskBackground.remove();
  });

  const editTaskTitle = document.createElement('h3');
  editTaskContainer.appendChild(editTaskTitle);
  editTaskTitle.innerText = 'Title :';

  const editTaskTitleText = document.createElement('textarea');
  editTaskTitleText.classList.add('edit-task-title-text');
  editTaskTitleText.setAttribute('required', '');
  editTaskTitleText.setAttribute('rows', '1');
  editTaskTitleText.setAttribute('cols', '60');
  editTaskContainer.appendChild(editTaskTitleText);
  editTaskTitleText.innerText = newTask.title;

  const editTaskDescriptionTitle = document.createElement('h3');
  editTaskContainer.appendChild(editTaskDescriptionTitle);
  editTaskDescriptionTitle.innerText = 'Description :';

  const editTaskDescriptionText = document.createElement('textarea');
  editTaskDescriptionText.classList.add('edit-task-description-text');
  editTaskDescriptionText.setAttribute('required', '');
  editTaskDescriptionText.setAttribute('rows', '6');
  editTaskDescriptionText.setAttribute('cols', '60');
  editTaskContainer.appendChild(editTaskDescriptionText);
  editTaskDescriptionText.innerText = newTask.description;

  const editTaskProjectTitle = document.createElement('h3');
  editTaskContainer.appendChild(editTaskProjectTitle);
  editTaskProjectTitle.innerText = 'Project :';

  const editTaskProject = document.createElement('textarea');
  editTaskProject.classList.add('edit-task-title-text');
  editTaskProject.setAttribute('rows', '1');
  editTaskProject.setAttribute('cols', '60');
  editTaskContainer.appendChild(editTaskProject);
  editTaskProject.innerText = newTask.project;

  const editTimePriorityContainer = document.createElement('div');
  editTimePriorityContainer.classList.add('edit-time-priority-container');
  editTaskContainer.appendChild(editTimePriorityContainer);

  const editTimeContainer = document.createElement('div');
  editTimeContainer.classList.add('edit-time-container');
  editTimePriorityContainer.appendChild(editTimeContainer);

  const editTaskDateTitle = document.createElement('h3');
  editTimeContainer.appendChild(editTaskDateTitle);
  editTaskDateTitle.innerText = 'Duo Date :';

  const editTaskDate = document.createElement('input');
  editTaskDate.setAttribute('type', 'date');
  editTaskDate.setAttribute('required', '');
  editTaskDate.classList.add('edit-task-date-input');
  editTimeContainer.appendChild(editTaskDate);
  editTaskDate.value = `${newTask.year}-${newTask.month}-${newTask.day}`;

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

  if (newTask.priority === 'Low') {
    editPriorityBtnLow.classList.toggle('edit-priority-btn-low-toggle');
    priorityChoice = 'Low';
  }
  if (newTask.priority === 'Medium') {
    editPriorityBtnMedium.classList.toggle('edit-priority-btn-medium-toggle');
    priorityChoice = 'Medium';
  }
  if (newTask.priority === 'High') {
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

  // Confirm button
  const editConfirmBtn = document.createElement('button');
  editConfirmBtn.classList.add('edit-confirm-btn');
  editTaskContainer.appendChild(editConfirmBtn);
  editConfirmBtn.innerText = 'Confirm Edit';
  editConfirmBtn.addEventListener('click', () => {
    newTask.title = editTaskTitleText.value;
    newTask.description = editTaskDescriptionText.value;
    newTask.project = editTaskProject.value;
    newTask.day = editTaskDate.value.slice(8, 10);
    newTask.month = editTaskDate.value.slice(5, 7);
    newTask.year = editTaskDate.value.slice(0, 4);
    newTask.priority = priorityChoice;
    if (priorityChoice === 'Low') {
      editPriorityBtnLow.classList.toggle('edit-priority-btn-low-toggle');
      priorityChoice = 'Low';
    }
    if (priorityChoice === 'Medium') {
      editPriorityBtnMedium.classList.toggle('edit-priority-btn-medium-toggle');
      priorityChoice = 'Medium';
    }
    if (priorityChoice === 'High') {
      editPriorityBtnHigh.classList.toggle('edit-priority-btn-high-toggle');
      priorityChoice = 'High';
    }
    editTaskBackground.remove();
    tasksArray.push(newTask);
    totalTasks();
  });
}

export {
  btnColorChange,
  removeTask,
  tasksContainer,
  allTaskAmount,
  todayTaskAmount,
  sevenDayTaskAmount,
  allTask,
  totalTasks,
  addProject,
  todayTask,
  weekTask,
  createNewTask,
};
