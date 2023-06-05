import './style.css';

const body = document.getElementsByTagName('body')[0];
// Top Bar
const topBar = document.createElement('div');
topBar.classList.add('top-bar');
body.appendChild(topBar);
topBar.innerText = 'TO DO LIST //';

// Container
// const container = document.createElement('div');
// container.classList.add('container');
// body.appendChild(container);

// Side Bar
const sideBar = document.createElement('div');
sideBar.classList.add('side-bar');
body.appendChild(sideBar);
// Side Bar Content
const tasksTitleContainer = document.createElement('div');
tasksTitleContainer.classList.add('tasks-title-container');
sideBar.appendChild(tasksTitleContainer);

const tasksTitle = document.createElement('div');
tasksTitle.classList.add('tasks-title');
tasksTitleContainer.appendChild(tasksTitle);
tasksTitle.innerText = 'Tasks';

const addTaskBtn = document.createElement('button');
addTaskBtn.classList.add('add-task-btn');
tasksTitleContainer.appendChild(addTaskBtn);
addTaskBtn.innerText = '+ Add Tasks';

const allTaskBtn = document.createElement('button');
allTaskBtn.classList.add('home-btn');
sideBar.appendChild(allTaskBtn);
allTaskBtn.innerText = 'All Tasks';

const todayBtn = document.createElement('button');
todayBtn.classList.add('today-btn');
sideBar.appendChild(todayBtn);
todayBtn.innerText = 'Today';

const weekBtn = document.createElement('button');
weekBtn.classList.add('week-btn');
sideBar.appendChild(weekBtn);
weekBtn.innerText = 'Next 7 Day';

const projectTitleContainer = document.createElement('div');
projectTitleContainer.classList.add('project-title-container');
sideBar.appendChild(projectTitleContainer);

const projectsTitle = document.createElement('div');
projectsTitle.classList.add('projects-title');
projectTitleContainer.appendChild(projectsTitle);
projectsTitle.innerText = 'Projects';

const addProjectBtn = document.createElement('button');
addProjectBtn.classList.add('add-project-btn');
projectTitleContainer.appendChild(addProjectBtn);
addProjectBtn.innerText = '+ Add Project';

const projectsContainer = document.createElement('div');
projectsContainer.classList.add('projects-container');
sideBar.appendChild(projectsContainer);

