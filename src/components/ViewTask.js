import React, {useEffect, useState} from 'react';
import {Divider, List, ListItem, ListItemText, Tooltip} from "@mui/material";
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import useStyles from './styles';

import Addtask from './AddTask';

const Viewtask = () => {

    const styles = useStyles();



    const [info, setInfo] = useState([]);

    const [dele, setDelete] = useState(false);

    const handlerDelete = ()=>{
        setDelete(!dele)
        if(!dele){
            setInfo([])
            setDelete(false)
        }
    }

    return (
        <div className={styles.container2}>
            <Addtask setData={setInfo}/>
            {/* <h3>Cantidad</h3> */}
            {info?.map((text, i)=>(
                <List aria-label="mailbox folders"  key={i} className={styles.task}>
                    <Divider/>
                    <ListItem >
                        <ListItemText primary={text} />
                    </ListItem>
                </List>
            )
            )}
            <Tooltip title="Delete">
                <Button onClick={handlerDelete}>
                    <DeleteForeverOutlinedIcon style={{color: "#db5555"}}/>
                </Button>
            </Tooltip>
        </div>
    );
}

export default Viewtask;
