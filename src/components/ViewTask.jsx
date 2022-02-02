import React, {useEffect, useState} from 'react';
import {Divider, List, ListItem, ListItemText, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles';

const Viewtask = ({data}) => {


    const styles = useStyles()

    const [info, setInfo] = useState([]);


    return (
        <div className={styles.container2}>
            {info.map((e, i)=>(
                <List aria-label="mailbox folders">
                    <Divider/>
                    <ListItem >
                        <ListItemText primary={e} />
                        <Tooltip title="Delete">
                            <DeleteIcon style={{color: "green"}}/>
                        </Tooltip>
                    </ListItem>
                </List>
            )
            )}
        </div>
    );
}

export default Viewtask;
