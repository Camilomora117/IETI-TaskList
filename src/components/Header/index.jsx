import './header.css';

const Header = (props) => {
    return <h1 className='task-header'>{props.title}</h1>;
}

export {Header}