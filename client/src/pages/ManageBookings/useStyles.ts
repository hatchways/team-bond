import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => {
    return{
        GridTop:{
            paddingTop: theme.spacing(6)
        },
        Avatar:{
            float: "left"
        },
        CalenderWeek:{
            paddingLeft: theme.spacing(1)
            
        }
    }
});

export default useStyles;
