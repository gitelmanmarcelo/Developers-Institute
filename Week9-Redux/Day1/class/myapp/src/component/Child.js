import {connect} from 'react-redux'
import { changePropTwo } from '../redux/actions'
import ChangeByClick from './ChangeByClick'


const Child = (props) => {
    return (
        <>
        <h1>text</h1>
        <h1>{props.prop_one}</h1>
        <h1>{props.b}</h1>
        <h1>{props.hello}</h1>
        <input name="name" placeholder='CHILD - change store' onChange={props.changePropB}/>
        <ChangeByClick/>


        </>
    )

}

const mapStateToProps = (state) => {
    return {
        b : state.property_one,
        hello: state.property_two
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      changePropB : (e) => {
        dispatch(changePropTwo(e.target.value))
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Child);