import React from 'react';
import {Paper} from "@mui/material";
import useStyles from "./styles";
import Viewtask from './ViewTask';


const Head = () => {
    const styles = useStyles();

    return (
        <Paper className={styles.componentPaper} elevation={10}>
            <Viewtask styles={styles}/>
        </Paper>

    );
}

export default Head;
