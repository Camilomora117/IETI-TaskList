import React from 'react';
import './search.css';

const Search = ({addTask, totalTask}) => {

    const [inputValueTitle, setInputValueTitle] = React.useState('');
    const [inputValueDescription, setInputValueDescription] = React.useState("");
    const [formValidator, setFormValidator] = React.useState({
        title: undefined,
    });

    const onChangeTitle = (event) => {
        const value = event.target.value;
        setFormValidator({
          ...formValidator,
          title: validatorTitle(value)
        });
        setInputValueTitle(value);
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
        setInputValueDescription(event.target.value);
    };

    const isFormValid = formValidator["title"] === "";

    const onClickButton = () => {
        if (isFormValid) {
            const verificateRepeatTask = totalTask.filter(task => task.title == inputValueTitle).length;
            if (verificateRepeatTask == 0) {
                addTask(inputValueTitle, inputValueDescription);
                setInputValueTitle('');
                setInputValueDescription('');
            } else {
                setFormValidator({
                    ...formValidator,
                    title: "Ya existe esta tarea"
                });
            }
        }
    }

    return (
        <div>
            <div className='TodoSearch-container'>
                <input onChange={onChangeTitle} value={inputValueTitle} className="TodoSearch" placeholder="Agrega un Titulo"></input>
                <input onChange={onChangeDescription} value={inputValueDescription} className="TodoSearch" placeholder="Agrega una Descripción"></input>
                <button disabled={!isFormValid} className='TodoButton' onClick={() => onClickButton()} >+</button> 
            </div>
            <span className="error" role="alert" >
                {formValidator.title}
            </span> 
        </div>

    )
}
export {Search}