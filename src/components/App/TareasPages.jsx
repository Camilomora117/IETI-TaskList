import { React } from 'react';
import { Header } from '../Header/index';
import { Search } from '../Search/index';
import { Task } from '../Task/index';
import { TaskList } from '../TaskList/index';
import { useTasks } from './useTask';
import { Modal } from '../Modal/index';
import { TodoForm } from '../TodoForm';

function TareasPage() {

  const {
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
        key={task.title}
        title={task.title}
        description={task.description}
        completed={task.completed}
        onComplete={() => completeTask(task.title)}
        onDelete={() => deleteTask(task.title)}
        setOpenModal={() => openUpdateTask(task.title, task.description, task.completed)}
        />  
      )}
      />

      {!!openModal && (
        <Modal>
            <TodoForm 
              updateTask={updateTask}
              setOpenModal={setOpenModal}
              textTitle={textUpdateTitle}
              textDescription={textUpdateDes}
              textCompleted={textUpdateCom}
            /> 
        </Modal> 
      )}

    </div>
  )
}

export default TareasPage
