# React Task Management App

## About
This is a simple **task management app** built with React.  
It has two types of users: **Admin** and **User**.  
- Admin can create tasks, assign them to users, and reassign tasks using drag-and-drop.  
- User can view tasks assigned to them and mark them as completed.  

All data is saved in the browser using **localStorage**, so no backend is needed.

## Features
- Role-based login (Admin/User)  
- Admin can create and assign tasks  
- Drag-and-drop task assignment (Admin)  
- User can mark tasks as completed  
- Data saved in localStorage
  
## Tech Used
- React  
- React-DnD  
- UUID (for unique task IDs)  
- CSS  
- LocalStorage

## How to Run
1. Clone the project:
bash
git clone https://github.com/nikhithasrungaram/react-task-management.git

2.Go to the project folder:
bash
cd react-task-management

3.Install dependencies:
bash
npm install

4.Start the app:
bash
npm start

5.Open in browser: http://localhost:3000

Note: The app will reload automatically if you make changes. You may also see lint errors in the console.

Login Details
Role	Username	Password
Admin	admin	admin123
User	user1	user123

