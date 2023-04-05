import { React } from 'react';
import { Header } from '../Header/index';
import { Search } from '../Search/index';
import { Task } from '../Task/index';
import { TaskList } from '../TaskList/index';
import { useTasks } from './useTask';

function App() {

  const {
    tasks,
    error,
    searchValue,
    setSearchValue,
    addTask,
    deleteTask,
    completeTask,
    openModal,
    setOpenModal,
  } = useTasks();


  return (
    <div className="App">
      <Header title="Todo App"/>  

      <Search />

      <TaskList 
      totalTask={tasks}

      render ={task => (
        <Task 
        key={task.name}
        text={task.name}
        completed={task.completed}
        />  
      )}
      
      />

    </div>
  )
}

export default App
