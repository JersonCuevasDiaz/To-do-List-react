import { makeStyles } from "@mui/styles";
// import { createTheme, ThemeProvider } from "@mui/material/styles";



const useStyles = makeStyles({

    componentPaper: {

        borderRadius: "2rem",
        // border: "1px solid blue",
        margin:  '90px auto',
        width:  '40%',
    },

    container: {

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "10px",
        margin: "15px auto",
    },

    title: {

        marginTop: "50px",

    },

    form1: {
        height: "30%",
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        marginRight: "2rem",
        marginLeft: "2rem",
        marginTop: "10px",
        rowGap: "20px",
        marginBottom: "30px",
    },

    link: {

        listStyle: "none",
        textDecoration: "none",

    },



    // COMPONENT VIEWTASK

    container2: {


        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        margin: "10px auto",
        width: "80%",
        // backgroundColor: "#b0c4de"
        // height: "60%"
    },

    paper2: {

        // backgroundColor: "red",
        
        

    }


















});




export default useStyles;