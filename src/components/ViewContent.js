import React, {useState} from 'react';
import {Divider, List, ListItem, ListItemText, Tooltip, Button} from "@mui/material";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Viewcontent = ({content, index, array_content, setTask, styles}) => {

    const handleDelete = () =>{
        const filter_array = array_content.tareas.filter(item => item !== array_content.tareas[index])
        setTask({tareas:filter_array})
    }

    return (
      <List aria-label="mailbox folders" className={styles.task}>
        <Divider />
        <ListItem>
          <ListItemText primary={`✔-${content}`} />
          <Tooltip title="Delete">
            <Button onClick={handleDelete}>
              <DeleteForeverOutlinedIcon style={{ color: "#db5555" }} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    );
}

export default Viewcontent;
