import React from 'react';
import { FormControl, OutlinedInput, Button} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';



const Addtask = ({styles}) => {

    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>To-do List</h1>
                <FormControl sx={{ width: '70%' }}>
                    <OutlinedInput placeholder="Add task" />
                    <Button><AddCircleIcon  className="fa-plus-circle" fontSize="large"/></Button>
                </FormControl>
            </div>
        </div>
    );
}

export default Addtask;
