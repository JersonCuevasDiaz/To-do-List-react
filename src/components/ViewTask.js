import React, {useEffect, useState} from 'react';
import {Divider, Grid, List, ListItem, ListItemText, Tooltip, Typography, Box, Paper} from "@mui/material";
import Counttask from './CountTask';


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
            {
                info.length > 0 ?(
                    <div>
                        <Paper style={{width: "100%", height: "auto", display: "flex", flexDirection: "column", margin: "0 auto"}} elevation={10}>
                            <Counttask total_task={info.length} classes={styles}/>
                            {
                            info?.map((text, i)=>(
                                <List aria-label="mailbox folders"  key={i} className={styles.task}>
                                    <Divider/>
                                    <ListItem >
                                        <ListItemText primary={text} />
                                        <Tooltip title="Delete" >
                                            <Button onClick={handlerDelete} >
                                                <DeleteForeverOutlinedIcon style={{color: "#db5555"}}/>
                                            </Button>
                                        </Tooltip>
                                    </ListItem>
                                </List>
                            ))
                            }
                        </Paper>
                    </div>
                ):(
                    console.log('no hay tareas')
                )
            }
        </div>
    );
}

export default Viewtask;
