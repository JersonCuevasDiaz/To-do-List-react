import React from 'react';

const Counttask = ({total_task , classes}) => {
    return (
      <div className={classes.count}>
        <h3>Total tasks</h3>
        <div className={classes.quantity}>
          <span>{total_task}</span>
        </div>
      </div>
    );
}

export default Counttask;
