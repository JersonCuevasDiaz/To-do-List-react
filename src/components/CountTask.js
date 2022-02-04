import React from 'react';
import { Typography } from '@mui/material';

const Counttask = ({total_task , classes}) => {
    return (
        <div className={classes.count}>
            <h4>Totals task</h4>
            <div className={classes.quantity}>
                <span>{total_task}</span>
            </div>

        </div>
    );
}

export default Counttask;
