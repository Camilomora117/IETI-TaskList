import React from "react";
import {useLocalStorage} from './useLocalStorage';

//Coustom Hooks
function useTasks() {
  
      const {
        item: tasks,
        saveItem: saveTasks,
        error,
      } = useLocalStorage('TASK_V1', []);
      
      const [openModal, setOpenModal] = React.useState(false);
      const [textUpdateTitle, setTextUpdateTitle] = React.useState('');
      const [textUpdateDes, setTextUpdateDes] = React.useState('');
      const [textUpdateCom, setTextUpdateCom] = React.useState(false);

      const completeTask = (title) => {
        const taskIndex = tasks.findIndex(todo => todo.title === title);
        const newTasks = [... tasks];
        newTasks[taskIndex].completed = true;
        saveTasks(newTasks);
      }
      
      const deleteTask = (title) => {
        const todoIndex = tasks.findIndex(todo => todo.title === title);
        const newTasks = [... tasks];
        newTasks.splice(todoIndex, 1);
        saveTasks(newTasks);
      }

      const addTask = (title, description) => {
        const newTasks = [...tasks];
        newTasks.push({
          title,
          description,
          completed: false,
        });
        saveTasks(newTasks);
      };

      const updateTask = (titletNew, desNew, compNew) => {
        if (textUpdateTitle != titletNew || textUpdateDes != desNew || textUpdateCom != compNew) {
          const newTasks = [... tasks].filter(task => task.title != textUpdateTitle);
          newTasks.push({title: titletNew, description: desNew, completed: compNew});
          saveTasks(newTasks);
        }
      }

      const openUpdateTask = (title, description, completed) => {
        setTextUpdateTitle(title);
        setTextUpdateDes(description);
        setTextUpdateCom(completed);
        setOpenModal(true);
      }

    return (
        {
            tasks,
            error,
            addTask,
            deleteTask,
            completeTask,
            openModal,
            setOpenModal,
            openUpdateTask,
            textUpdateTitle,
            textUpdateDes,
            textUpdateCom,
            updateTask,
        }
    );
} 

export {useTasks}