import React from 'react';
import {Divider, List, ListItem, ListItemText, Tooltip, IconButton, Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Viewtask = ({styles}) => {
    return (
        <div className={styles.container2}>
            <List aria-label="mailbox folders">
                <Divider/>
                <ListItem>
                    <ListItemText primary='ola'/>
                    <Tooltip title="Delete" onClick={()=>{console.log('mmg')}}>
                        <DeleteIcon style={{color: "blue"}}/>
                    </Tooltip>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText primary="klk tu dic"/>
                    <Tooltip title="Delete" onClick={()=>{console.log('mmg')}}>
                        <DeleteIcon style={{color: "blue"}}/>
                    </Tooltip>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText primary="dime ave"/>
                    <Tooltip title="Delete" onClick={()=>{console.log('mmg')}}>
                        <DeleteIcon style={{color: "blue"}}/>
                    </Tooltip>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="queloqueentoki"/>
                        <Tooltip title="Delete" onClick={()=>{console.log('mmg')}}>
                            <DeleteIcon style={{color: "blue"}}/>
                        </Tooltip>
                </ListItem>
                <Divider/>



                
            </List>
        </div>
    );
}

export default Viewtask;
