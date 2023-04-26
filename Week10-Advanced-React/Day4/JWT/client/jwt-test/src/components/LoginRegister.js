import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { AppContext } from "../App";


const LoginRegister = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [msg,setMsg] = useState('');
    const navigate = useNavigate();
    const {setAccessToken} = useContext(AppContext);

    useEffect(()=>{setMsg('')},[props.title]);

    const handleAction = async (title) => {
        if (title === 'Register') {
            try {
                let response = await axios.post('/register', { email, password});
                console.log(response.data);
                setMsg(response.data.msg);
                navigate('/login');
            }
            catch (err)
            {
                console.log(err.response.data)
                setMsg(err.response.data.msg);
            }
        } 
        else
        {
            try {
                let response = await axios.post('/login', { email, password});
                console.log(response.data);
                setAccessToken(response.data);
                navigate('/');
            }
            catch (err)
            {
                console.log(err.response.data)
                setMsg(err.response.data.msg);
            }
        }
    }

    return(
        <>
        <h1>{props.title}</h1>
        <Box component="form" sx={{m:1}} noValidate autoComplete="off">
            <TextField sx={{m:1}} id="email" label="Enter email:" variant="outlined"
             onChange={(e)=>setEmail(e.target.value)} />
            <TextField sx={{m:1}} id="password" label="Enter password:" variant="outlined"
             onChange={(e)=>setPassword(e.target.value)} />
        </Box>
        <Button variant="contained" onClick={() => handleAction(props.title)}>{props.title}</Button>
        <div>
            <p>{msg}</p>
        </div>
        <div>
            {
            props.title === 'Register' ?
            <Link to='/login'>Login</Link>
            : <Link to='/register'>Register</Link>
            }
        </div>
        </>
    )
}

export default LoginRegister;