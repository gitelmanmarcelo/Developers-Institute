import TransactionForm from "./TransactionForm";
import { connect } from 'react-redux'
import { del, edit } from "../actions/transactionActions";


const TransactionList = (props) => {
    return (
        <div>
            <TransactionForm/><br/>
            <table style={{margin: '0 auto'}}>
                {
                props.transactions.map((trans,index) => (
                    <tr>
                        <td style={{width: '80px', border : '1px solid black'}}>{trans.account}</td>
                        <td style={{width: '80px', border : '1px solid black'}}>{trans.FSC}</td>
                        <td style={{width: '250px', border : '1px solid black'}}>{trans.name}</td>
                        <td style={{width: '130px', border : '1px solid black'}}>{trans.amount}</td>
                        <td style={{width: '80px', border : '1px solid black'}}><button name={index} onClick={props.handleEdit}>Edit</button></td>
                        <td style={{width: '80px', border : '1px solid black'}}><button name={index} onClick={props.handleDelete}>Delete</button></td>
                    </tr>
                ))
                }
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        transactions : state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleEdit : (e) => {dispatch(edit(e.target.name))},
        handleDelete : (e) => {dispatch(del(e.target.name))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionList);