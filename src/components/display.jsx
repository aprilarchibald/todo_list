import React, { useState } from 'react';

const Display = (props) => {
    const [isComplete, setIsComplete] = useState(false);

    const remove = (todo) => {
        const newList = props.list.filter((task) => {
            return task != todo;
        });
        props.setList(newList)
    }

    
    const isUpdated = (idx) => {
        const copy =[...props.list];
        copy[idx].isComplete = !copy[idx].isComplete;
        setIsComplete(copy);
        // if(copy[i].isComplete ===true){
        //     copy[i].isComplete = false;
        // }else{
        //     copy[i].isComplete = true;
        // }

        // console.log(i);
    }

    


return (
    <div>
        {props.list.map ((todo, idx) => {
            return <li key={idx} style = {{textDecoration: todo.isComplete ? "line-through" : "none"}}>
                {todo.theList}
                        <input type="checkbox" checked={todo.isComplete} onChange={() => isUpdated(idx)}/>
                
                <button onClick= {() => remove(todo)}>Delete</button>
            </li>
            })
        }
        {/* {JSON.stringify(props.list)} */}
    </div>
)
}

export default Display;