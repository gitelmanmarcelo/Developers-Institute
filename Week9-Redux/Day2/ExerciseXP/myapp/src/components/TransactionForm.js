import { connect } from 'react-redux'
import { input, submit } from '../actions/transactionActions'

const TransactionForm = (props) => {
        return (
            <div>
                <form onSubmit={props.handleSubmit}>
                    <input onKeyDown={props.handleKey} value={props.account} type="text" id="account" placeholder="account number"  /><br/>
                    <input onKeyDown={props.handleKey} value={props.FSC} type="number" id="FSC" placeholder="FSC" /><br/>
                    <input onKeyDown={props.handleKey} value={props.name} id="name" placeholder="name" /><br/>
                    <input onKeyDown={props.handleKey} value={props.amount} type="number" id="amount" placeholder='amount'/><br/><br/>
                    <input type="submit" value="submit"/><br/>
                </form>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        status : state.currentIndex,
        account : state.editing.account,
        FSC : state.editing.FSC,
        name : state.editing.name,
        amount : state.editing.amount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit : (e) => {
            e.preventDefault();
            const form = e.target;
            const data = { account: form.account.value, 
                FSC: form.FSC.value,
                name: form.name.value, 
                amount: form.amount.value
                }
            dispatch(submit(data))
        },
        handleKey : (e) => dispatch(input(e))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionForm);