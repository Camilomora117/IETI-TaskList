import './Task.css';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Task(props) {
    
    return (
        <li className='TodoTask'>

            <div className="container-info">

                {(props.completed)
                ?<RadioButtonCheckedIcon color="success" className="boton-check"/>
                :<RadioButtonUncheckedIcon
                onClick={props.onComplete}
                className="boton-check"
                />
                }

                <div className="container-texts">
                    <h1 
                    className={`TodoTask-p ${props.completed && 'TodoTask-p--complete'}`}
                    >
                    {props.title}
                    </h1>

                    <p 
                    className={`TodoTask-p description ${props.completed && 'TodoTask-p--complete'}`}
                    >
                    {props.description}
                    </p>
                </div>

            </div>

            <div className='options-container'>
                <EditIcon 
                color="primary"
                onClick={props.setOpenModal}
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