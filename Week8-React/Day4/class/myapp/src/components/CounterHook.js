import {useState, useEffect} from 'react';

const CounterHook = (props) => {
    // const [state, setState] = useState(0);
    const [count,setCount] = useState(0);
    const [email,setEmail] = useState("");
    const [users,setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => {setUsers(data)})
    })

    useEffect(()=> {
        console.log('mount ',count);
    },[])   // componentDidMount
    
    useEffect(()=> {
        console.log('update: ',count);
    })   // componentDidUpdate

    useEffect(()=> {
        console.log('mail ',count);
    },[email])   // componentDidUpdate - if you change the email

    useEffect(()=> {
        console.log('mail,count ',count);
    },[email,count])   // componentDidUpdate - if you change the email or the count


    return (
        <>
            Count: {count}
            <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            {email}
            <button onClick={() => setCount(count+1)}>Add</button>
            {users}
        </>
    )
}

export default CounterHook;