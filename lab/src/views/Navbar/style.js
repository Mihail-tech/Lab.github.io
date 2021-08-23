import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: '50px',
        paddingTop: '20px'
        
    },
    navLink: {
        textDecoration: "none"
    },
    active: {
        padding: "5px",
        backgroundColor: "red",
        borderRadius: '15%'
        
    }
})

export default useStyles;