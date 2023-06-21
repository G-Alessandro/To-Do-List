import './style.css';
import {
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
  tasksArray,
} from './function';

const body = document.getElementsByTagName('body')[0];
// Top Bar
const topBar = document.createElement('div');
topBar.classList.add('top-bar');
body.appendChild(topBar);
topBar.innerText = 'TO DO LIST';
// Side Bar
const sideBar = document.createElement('div');
sideBar.classList.add('side-bar');
body.appendChild(sideBar);
// Side Bar Content
const tasksTitleContainer = document.createElement('div');
tasksTitleContainer.classList.add('tasks-title-container');
sideBar.appendChild(tasksTitleContainer);
// Tasks Title
const tasksTitle = document.createElement('div');
tasksTitle.classList.add('tasks-title');
tasksTitleContainer.appendChild(tasksTitle);
tasksTitle.innerText = 'Tasks';
// Add Task Button
const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-btn');
tasksTitleContainer.appendChild(addTaskBtn);
addTaskBtn.innerText = 'Add Tasks';
// All Task Button
const allTaskBtn = document.createElement('button');
allTaskBtn.classList.add('home-btn');
sideBar.appendChild(allTaskBtn);
allTaskBtn.innerText = 'All Tasks';
allTaskBtn.appendChild(allTaskAmount);
// Today Button
const todayBtn = document.createElement('button');
todayBtn.classList.add('today-btn');
sideBar.appendChild(todayBtn);
todayBtn.innerText = 'Today';
todayBtn.appendChild(todayTaskAmount);
// Week Button
const weekBtn = document.createElement('button');
weekBtn.classList.add('week-btn');
sideBar.appendChild(weekBtn);
weekBtn.innerText = 'Next 7 Day';
weekBtn.appendChild(sevenDayTaskAmount);
// Project Title Container
const projectTitleContainer = document.createElement('div');
projectTitleContainer.classList.add('project-title-container');
sideBar.appendChild(projectTitleContainer);
// Projects Title
const projectsTitle = document.createElement('div');
projectsTitle.classList.add('projects-title');
projectTitleContainer.appendChild(projectsTitle);
projectsTitle.innerText = 'Projects';
// Projects Container
const projectsContainer = document.createElement('div');
projectsContainer.classList.add('projects-container');
sideBar.appendChild(projectsContainer);
body.appendChild(tasksContainer);

btnColorChange('home-btn', 'today-btn', 'week-btn');
allTask(0, tasksArray.length);
addProject();
totalTasks();

addTaskBtn.addEventListener('click', () => {
  createNewTask();
});

allTaskBtn.addEventListener('click', () => {
  btnColorChange('home-btn', 'today-btn', 'week-btn');
  removeTask();
  addProject();
  allTask(0, tasksArray.length);
  totalTasks();
});

todayBtn.addEventListener('click', () => {
  btnColorChange('today-btn', 'home-btn', 'week-btn');
  removeTask();
  addProject();
  todayTask();
  totalTasks();
});

weekBtn.addEventListener('click', () => {
  btnColorChange('week-btn', 'home-btn', 'today-btn');
  removeTask();
  addProject();
  weekTask();
  totalTasks();
});
