import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import jwt_decode from 'jwt-decode';


const Home = (props) => {

    const [users, setUsers] = useState([]);
    const [msg, setMsg] = useState("");
    const  {accessToken} = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(()=>{
        try {
            console.log('accessToken =>',accessToken.accessToken);
            const decode = jwt_decode(accessToken.accessToken);
            console.log(decode);

            const expire = decode.exp;

            console.log(expire * 1000,new Date().getTime());

            if (expire * 1000 < new Date().getTime()){
                navigate('/login');
            }
        } 
        catch (err) {
            navigate('/login');
        }
    },[])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('/users');
                setUsers(response.data);
            }
            catch (err) {
                console.log(err.response.data);
                setMsg(err.response.data.msg);
            }
        }

        getUsers();
    },[]);

    return(
        <>
        <h1>Home</h1>
        {
            users.map(item => {
                return (
                    <div>
                        {item.id}  {item.email}
                       
                    </div>
                )
            })
        }
         {msg}
        </>
    )
}

export default Home;