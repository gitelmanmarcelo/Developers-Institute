import React from 'react';

class Customers extends React.Component {

    constructor() {
        super();
        this.state = {customers : []};
    }

    componentDidMount = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/customers');
            const data = await res.json();
            console.log('sdssdsd',data);
            this.setState({customers : data});
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        console.log('hhhhhhh',this.state.customers);
        return (
            <>
            <h1>Customers</h1>
            {
                this.state.customers.map( customer => (
                    <p style={{borderBottom : '1px dashed grey'}}>{customer.firstName} {customer.lastName}</p>
                ))
            }
            </>
        )
    }

}

export default Customers;