// import React,{useState} from "react";
// import { Grid, Paper, TextField, Button, Link } from "@mui/material";
// import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

// import useStyles from "./styles";




// function Login() {

//   const styles = useStyles();

//   const [dates, setDates] = useState(' ');

//   const handlerSubm = (e) =>{
//     e.preventDefault()

//   }

//   const handlerDates = (e) => {
//     setDates([e.target.value])
//   }

//   console.log(dates)


//   return (
//     <Grid style={{width:"100%", height:'100%', display:"flex"}} >
//       <Paper className={styles.componentPaper} variant="outlined" square>
//         <div className={styles.container}>
//           <h1 className={styles.title}>Welcome!</h1>
//           <AccountCircleSharpIcon fontSize="large"/>
//         </div>
//         <form className={styles.form1} onSubmit={handlerSubm} >
//           <TextField id="outlined-basic" label="Username" variant="outlined" onChange={handlerDates} />
//           <TextField id="outlined-basic" label="Password" variant="outlined" onChange={handlerDates} />
//           <Button variant="contained">Login</Button>
//           <Link component="button" className={styles.link}>Forgot Password?</Link>
//         </form>
//       </Paper>
//     </Grid>

//   );
// }

// export default Login;
