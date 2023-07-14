import Checkbox from "./Checkbox"

const Tasks = ({ name, done, onToggle }) => {
    return (
        <div className={'task' + (done ? ' done' : "")}>
            <Checkbox checked={done} handleClick={() => onToggle(!done)} />
            {name}
        </div>
    )
}

export default Tasks