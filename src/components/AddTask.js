import React, {useState} from 'react';
import { OutlinedInput, Button} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useStyles from './styles';


const Addtask = ({setData}) => {

    const styles = useStyles();

    const [task, setTask] = useState([]);

    const handlerSubmit = (e) =>{
        e.preventDefault()
        if(task.length > 0){
            setData((elem)=>[task, ...elem])
        }
    }

    const handlerSendInput = (e)=>{
        setTask(e.target.value)
    }

    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>To-do List</h1>
                <form onSubmit={handlerSubmit}>
                    <OutlinedInput placeholder="Add task" onChange={handlerSendInput} />
                    <AddCircleIcon onClick={handlerSubmit}/>
                </form>
            </div>
        </div>
    );
}

export default Addtask;
