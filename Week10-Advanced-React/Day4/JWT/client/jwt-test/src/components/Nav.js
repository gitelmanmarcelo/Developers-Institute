import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Nav = (props) => {
    return(
        <>
        <Stack spacing={2} direction='row'>
        <Button component={Link} to='/'>Home</Button>        
        <Button component={Link} to='/about'>About</Button>        
        <Button component={Link} to='/register'>Register</Button>        
        <Button component={Link} to='/Login'>Login</Button>  
        </Stack>      
        </>
    )
}

export default Nav;