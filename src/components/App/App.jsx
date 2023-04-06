import { React } from 'react';
import { Header } from '../Header/index';
import { Search } from '../Search/index';
import { Task } from '../Task/index';
import { TaskList } from '../TaskList/index';
import { useTasks } from './useTask';
import { Modal } from '../Modal/index';
import { TodoForm } from '../TodoForm';

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
    openUpdateTask,
    textUpdate,
    updateTask,
  } = useTasks();


  return (
    <div className="App">
      <Header title="Todo App"/>  

      <Search 
      addTask={addTask}
      totalTask={tasks}
      />

      <TaskList 
      totalTask={tasks}

      render ={task => (
        <Task 
        key={task.text}
        text={task.text}
        completed={task.completed}
        onComplete={() => completeTask(task.text)}
        onDelete={() => deleteTask(task.text)}
        setOpenModal={() => openUpdateTask(task.text)}
        />  
      )}
      />

      {!!openModal && (
        <Modal>
            <TodoForm 
              updateTask={updateTask}
              setOpenModal={setOpenModal}
              textTask={textUpdate}
            /> 
        </Modal> 
      )}

    </div>
  )
}

export default App
