import './TaskList.css';

const TaskList = (props) => {

    
    return (
        <section className='TaskList-container'>
            {props.totalTask.map(props.render)}
        </section>
    );
}

export {TaskList};