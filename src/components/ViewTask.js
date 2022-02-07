import React, { useState} from 'react';
import {Divider,List, ListItem, ListItemText, Tooltip, Paper, Button} from "@mui/material";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Checkbox from '@mui/material/Checkbox';
import Counttask from './CountTask';
import CardMessage from './CardMessage';
// import Addtask from './AddTask';

import useStyles from './styles';

const Viewtask = ({data}) => {

    const styles = useStyles();

    const [info, setInfo] = useState(data.tareas);

    console.log(info)

    // const [dele, setDelete] = useState(false);

    const handlerDelete = ()=>{
        // setDelete(!dele)
        // if(!dele){
        //     setInfo([])
        //     setDelete(false)
        // }
    }

    return (
        <div className={styles.container2}>
            {
                info.length > 0 ?(
                    <div>
                        <Paper style={{width: "100%", height: "auto", display: "flex", flexDirection: "column",  backgroundColor: "#d3d3d3"}} elevation={10}>
                            <Counttask total_task={info.length} classes={styles}/>
                            {
                                info?.map((text, i)=>(
                                    <List aria-label="mailbox folders" key={i} className={styles.task}>
                                        <Divider/>
                                        <ListItem >
                                            <ListItemText primary={`✔-${text}`} />
                                            <Checkbox/>
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
                    <CardMessage classes={styles}/>
                )
            }
        </div>
    );
}

export default Viewtask;
