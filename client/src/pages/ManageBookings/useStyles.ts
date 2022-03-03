import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => {
    return{
        gridTop:{
            paddingTop: theme.spacing(6)
        },
        Avatar:{
            float: "left"
        },
        calenderWeek:{
            paddingLeft: theme.spacing(1)
            
        }
    }
});

export default useStyles;
