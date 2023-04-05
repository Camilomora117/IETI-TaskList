import './Task.css';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Task(props) {
    return (
        <li className='TodoTask'>

            {(props.completed)
            ?<RadioButtonCheckedIcon color="success"/>
            :<RadioButtonUncheckedIcon/>
            }
            
            <p 
            className={`TodoTask-p ${props.completed && 'TodoTask-p--complete'}`}
            >
            {props.text}
            </p>

            <div>
                <EditIcon color="primary"/> 
                <DeleteIcon className='icon_delete' />
            </div>

        </li>
    );
}

export {Task};