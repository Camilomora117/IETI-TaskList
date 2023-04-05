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
      const [searchValue, setSearchValue] = React.useState('');

      const completeTask = (text) => {
        const taskIndex = tasks.findIndex(todo => todo.text === text);
        const newTasks = [... tasks];
        newTasks[taskIndex].completed = true;
        saveTasks(newTasks);
      }
      const deleteTask = (text) => {
        const todoIndex = tasks.findIndex(todo => todo.text === text);
        const newTasks = [... tasks];
        newTasks.splice(todoIndex, 1);
        saveTasks(newTasks);
      }

      const addTask = (text) => {
        const newTasks = [...tasks];
        newTasks.push({
          text,
          completed: false,
        });
        saveTasks(newTasks);
      };

    return (
        {
            tasks,
            error,
            searchValue,
            setSearchValue,
            addTask,
            deleteTask,
            completeTask,
            openModal,
            setOpenModal,
        }
    );
} 

export {useTasks}