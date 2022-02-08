import React from 'react';
import {Paper, Button} from "@mui/material";
import Counttask from './CountTask';
import CardMessage from './CardMessage';
import Viewcontent from './ViewContent';
import useStyles from './styles';

const Viewtask = ({data, setTask}) => {

    const styles = useStyles();

    return (
      <div className={styles.container2}>
        {data.tareas.length > 0 ? (
          <div>
            <Paper
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#d3d3d3",
              }}
              elevation={10}
            >
              <Counttask total_task={data.tareas.length} classes={styles} />
              {data.tareas?.map((text, i) => (
                <Viewcontent
                  content={text}
                  index={i}
                  array_content={data}
                  setTask={setTask}
                  styles={styles}
                  key={i}
                />
              ))}
            </Paper>
            <Button
              variant="contained"
              style={{ width: "100%", marginTop: "10px" }}
              onClick={(e) => setTask({ tareas: [] })}
            >
              CLEAR LIST
            </Button>
          </div>
        ) : (
          <CardMessage />
        )}
      </div>
    );

}

export default Viewtask;
