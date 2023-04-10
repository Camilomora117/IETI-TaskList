import React from 'react';
import './TodoForm.css';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

function TodoForm({updateTask,setOpenModal,textTitle,textDescription,textCompleted}) {

  const [newTodoTitle, setNewTodoTitle] = React.useState(textTitle);
  const [newTodoDescription, setNewTodoDescription] = React.useState(textDescription);
  const [newTodoCompleted, setNewTodoCompleted] = React.useState(textCompleted);
  const [formValidator, setFormValidator] = React.useState({
    title: undefined,
  });

  const onChangeTitle = (event) => {
    const value = event.target.value;
    setFormValidator({
      ...formValidator,
      title: validatorTitle(value)
    });
    setNewTodoTitle(value);
  };

  const validatorTitle = (value) => {
    if (value.length == 0) {
      return "El titulo es Obligatorio";
    } else if (value.length <= 2) {
      return "El titulo tiene que ser mayor a 3 caracteres";
    } else {
      return "";
    }
  }

  const onChangeDescription = (event) => {
    setNewTodoDescription(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onCLickCompleted = () => {
    setNewTodoCompleted(prevState => !prevState);
  }

  const isFormValid = formValidator["title"] === "" || formValidator["title"] === undefined;

  const onSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      updateTask(newTodoTitle, newTodoDescription, newTodoCompleted);
      setOpenModal(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>

      <label>Edita la Tarea</label>

      <textarea
        className='textarea-title'
        value={newTodoTitle}
        onChange={onChangeTitle}
        placeholder='Edita el titulo'
      />

      <span className="error-edit" role="alert" >
          {formValidator.title}
      </span> 

      <textarea
        className='textarea-description'
        value={newTodoDescription}
        onChange={onChangeDescription}
        placeholder='Edita la descripcion'
      />

      {(newTodoCompleted)
      ?<RadioButtonCheckedIcon color="success" className="boton-check-update" onClick={onCLickCompleted}/>
      :<RadioButtonUncheckedIcon color="primary" className="boton-check-update"onClick={onCLickCompleted}/>
      }

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
