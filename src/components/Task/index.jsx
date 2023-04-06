import './Task.css';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Task(props) {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }
    
    return (
        <li className='TodoTask'>

            {(props.completed)
            ?<RadioButtonCheckedIcon color="success"/>
            :<RadioButtonUncheckedIcon
            onClick={props.onComplete}
            />
            }
            
            <p 
            className={`TodoTask-p ${props.completed && 'TodoTask-p--complete'}`}
            >
            {props.text}
            </p>

            <div className='options-container'>
                <EditIcon 
                color="primary"
                onClick={() => onClickButton()}
                /> 

                <DeleteIcon 
                className='icon_delete' 
                onClick={props.onDelete}
                />
            </div>

        </li>
    );
}

export {Task};