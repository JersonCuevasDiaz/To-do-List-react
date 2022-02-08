import React, {useState} from 'react';
import { OutlinedInput, Button} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useStyles from './styles';
import Viewtask from './ViewTask';




const Addtask = () => {

    const styles = useStyles();

    const [task, setTask] = useState([]);
    const [content, setContent] = useState({tareas:[]})


    const convertToUpperCase = (task)=> {
        if(task.length > 0){
            return [task.charAt(0).toUpperCase() + task.slice(1)]
        }
    }

    const handlerSubmit = (e) =>{
        e.preventDefault()
        if(task.length > 0){
            content.tareas.unshift(convertToUpperCase(task))
            setTask('')
        }
    }

    const handlerSendInput = (e)=>{
        setTask(e.target.value)
    }

    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>Todo List</h1>
                <form onSubmit={handlerSubmit}>
                    <OutlinedInput placeholder="Add task" onChange={handlerSendInput} value={task}/>
                    <Button variant="outline" onClick={handlerSubmit}>
                        <AddCircleIcon />
                    </Button>
                </form>
                <Viewtask data={content}/>
            </div>
        </div>
    );
}

export default Addtask;
