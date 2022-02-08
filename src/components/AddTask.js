import React, {useState} from 'react';
import { OutlinedInput, Button} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useStyles from './styles';
import Viewtask from './ViewTask';

const Addtask = () => {

    const styles = useStyles();
    // States
    const [value, setValue] = useState([]);
    const [task, setTask] = useState({ tareas: [] });

    // Convert first letter to uppercase
    const convertToUpperCase = (task) => {
      if (task.length > 0) {
        return [task.charAt(0).toUpperCase() + task.slice(1)];
      }
    };
    // Submit content of form
    const handlerSubmit = (e) => {
      e.preventDefault();
      if (value.length > 0) {
        task.tareas.unshift(convertToUpperCase(value));
        setValue("");
      }
    };
    // Send input onchange function
    const handleSendInput = (e) => {
      setValue(e.target.value);
    };

    return (
      <div>
        <div className={styles.container}>
          <h1 className={styles.title}>Todo List</h1>
          <form onSubmit={handlerSubmit}>
            <OutlinedInput
              placeholder="Add task"
              onChange={handleSendInput}
              value={value}
            />
            <Button variant="outline" onClick={handlerSubmit}>
              <AddCircleIcon />
            </Button>
          </form>
          <Viewtask data={task} setTask={setTask} />
        </div>
      </div>
    );
}

export default Addtask;
