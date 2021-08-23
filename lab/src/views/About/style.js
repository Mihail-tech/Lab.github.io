import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    decorationTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        background: '#3333'
    },
    titleLab: {
        marginLeft: '40px'
    },
    list: {
        display: 'flex'
        
    },
    point: {
        padding: '20px',
        listStyleType: 'none'
    }
})

export default useStyles;