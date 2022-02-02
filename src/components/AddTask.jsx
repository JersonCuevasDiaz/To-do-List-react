import React, {useState} from 'react';
import { OutlinedInput} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Viewtask from './ViewTask';



const Addtask = ({styles}) => {

    const [task, setTask] = useState([]);

    const handlerSubmit = (e) =>{
        e.preventDefault()
        setTask([e.target[0].value])
    }

    const handlerSendInput = (e)=>{
        // console.log(e.target.value)
    }

    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>To-do List</h1>
                <form onSubmit={handlerSubmit}>
                    <OutlinedInput placeholder="Add task" onChange={handlerSendInput} />
                    <button style={{border: "none", color: 'green'}}><AddCircleIcon  onSubmit={handlerSubmit}/></button>
                </form>
            </div>
            {/* <Viewtask data={task}/> */}
        </div>
    );
}

export default Addtask;
