import Checkbox from "./Checkbox"

const Tasks = ({name,done}) => {
    return (
        <div className="task">
           <Checkbox defaultChecked={done}/>
            {name}
        </div>
    )
}

export default Tasks