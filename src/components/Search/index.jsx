import React from 'react';
import './search.css';

const Search = ({addTask, totalTask}) => {

    const [inputValue, setInputValue] = React.useState('');
    
    const [inputPlaceHolder, setInputPlaceHolder] = React.useState('Agrega un nuevo Todo');

    const onClickButton = () => {
        if (!!inputValue) {
            const verificateRepeatTask = totalTask.filter(task => task.text == inputValue).length;
            if (verificateRepeatTask == 0) {
                addTask(inputValue);
            } else {
                setInputValue('');
                setInputPlaceHolder('Ya escribiste esta Tarea!');
            }
        } else {
        setInputPlaceHolder('Tienes que escribir algo!');
        }
    }

    const onChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className='TodoSearch-container'>
            <input onChange={onChange} value={inputValue} className="TodoSearch" placeholder={inputPlaceHolder}></input>
            <button className='TodoButton' onClick={() => onClickButton()} >+</button> 
        </div>
    )
}
export {Search}