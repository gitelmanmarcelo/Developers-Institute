import { useContext } from "react";
import { AppContext} from '../App';

const ChangeName = (props) => {
    const {name,setName} = useContext(AppContext);
    return (
        <>
        {/* <input onChange={(e) => props.setName(e.target.value)}/> */}
        <input onChange={(e) => setName(e.target.value)}/>
        </>
    )
}

export default ChangeName;