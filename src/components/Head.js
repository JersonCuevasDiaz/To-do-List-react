import React from 'react';
import {Paper} from "@mui/material";
import useStyles from "./styles";
import Viewtask from './ViewTask';
import  Addtask  from '././AddTask';


const Head = () => {
    const styles = useStyles();

    return (
        <Paper className={styles.container_general} elevation={20}>
            <Paper className={styles.componentPaper} elevation={10}>
                {/* <Viewtask styles={styles}/> */}

               < Addtask/>
            </Paper>
        </Paper>

    );
}

export default Head;
