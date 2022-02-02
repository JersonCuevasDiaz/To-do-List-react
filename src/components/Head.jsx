import React from 'react';
import {Paper} from "@mui/material";
import Addtask from './AddTask';
import useStyles from "./styles";
import Viewtask from './ViewTask';



const Head = () => {

    const styles = useStyles();

    return (

        <Paper className={styles.componentPaper} elevation={10}>
            <Addtask styles={styles}/>
            <Viewtask styles={styles}/>
        </Paper>

    );
}

export default Head;
