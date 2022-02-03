import React, {useEffect, useState} from 'react';
import {Divider, List, ListItem, ListItemText, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles';

import Addtask from './AddTask';

const Viewtask = () => {

    const styles = useStyles()

    const [info, setInfo] = useState([]);

    return (
        <div className={styles.container2}>
            <Addtask setData={setInfo}/>
            {info?.map((text, i)=>(
                <List aria-label="mailbox folders"  key={i} className={styles.task}>
                    <Divider/>
                    <ListItem >
                        <ListItemText primary={text} />
                        <Tooltip title="Delete">
                            <DeleteIcon style={{color: "blue"}}/>
                        </Tooltip>
                    </ListItem>
                </List>
            )
            )}
        </div>
    );
}

export default Viewtask;
