import React from 'react';
import './TodoForm.css';

function TodoForm({updateTask,setOpenModal,textTask}) {

  const [newTodoValue, setNewTodoValue] = React.useState(textTask);
  const [textAreaValue, setTextAreaValue] = React.useState('Edita la tarea que quieres agregar');
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!!newTodoValue) {
      updateTask(textTask, newTodoValue);
      setOpenModal(false);
    } else {
      setTextAreaValue('Tienes que escribir algo!');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Edita la Tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder={textAreaValue}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>

        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Aceptar
        </button>

      </div>
    </form>
  );
}

export { TodoForm };
