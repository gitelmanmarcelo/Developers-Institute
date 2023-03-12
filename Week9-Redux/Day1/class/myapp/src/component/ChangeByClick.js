import { switchProps } from "../redux/actions";
import { connect } from "react-redux";

const ChangeByClick = (props) => {
    return (
        <div>
            {/* <button onClick={props.propSwitch}>Change Prop One to Prop two</button> */}
            {/* <button onClick={() => props.dispatch(switchProps())}>Change Prop One to Prop two</button> */}
            <button onClick={() => props.dispatch({type : 'SWITCH'})}>Change Prop One to Prop two</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    console.log('dispatxh')
    return {
        propSwitch : () => { dispatch(switchProps())}
    }
}

// export default connect(null,mapDispatchToProps)(ChangeByClick);
export default connect()(ChangeByClick);