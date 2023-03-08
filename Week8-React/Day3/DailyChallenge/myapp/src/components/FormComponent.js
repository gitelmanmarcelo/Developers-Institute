import React from 'react'

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname : '',
            lname : '',
            age : '',
            genre: '',
            destination : '',
            nuts : '',
            lactose : '',
            vegan : ''
        }
    }

    handleChange = (e) => {
        const field = e.target;
        console.log(field.type)
        console.log(field.value)
        console.log(field.id)
        if (field.type === 'checkbox') {
            this.setState({[field.name] : field.checked ? 'yes' : 'no'});
        } else
            this.setState({[field.name] : field.value});
        

    }

    render() {
        return (
            <>
                <form action="http://localhost:3000" method="GET">
                    <input placeholder='First Name' name='fname' onChange={this.handleChange}/><br/>
                    <input placeholder='Last Name' name='lname' onChange={this.handleChange}/><br/>
                    <input placeholder='Age' name='age'  onChange={this.handleChange}/><br/>
                    <input type="radio" name="genre" value="Male" onChange={this.handleChange}/>Male<br/>
                    <input type="radio" name="genre" value="Female" onChange={this.handleChange}/>Female<br/>
                    <p>Select your destination</p><br/>
                    <select name='destination' onChange={this.handleChange}>
                        <option value="Paris">Paris</option><br/>
                        <option value="NY">NY</option><br/>
                        <option value="LA">LA</option><br/>
                    </select>
                    <p>Dietary Restrictions:</p>
                    <input type="checkbox" name='nuts' onChange={this.handleChange} /><span>Nuts free</span><br/> 
                    <input type="checkbox" name='lactose' onChange={this.handleChange} /><span>Lactose free</span><br/>
                    <input type="checkbox" name='vegan' onChange={this.handleChange} /><span>Vegan</span><br/><br/>
                    <input type="submit" value="submit"/>
                </form>
                <p>First Name: {this.state.fname}</p><br/>
                <p>Last Name: {this.state.lname}</p><br/>
                <p>Age: {this.state.age}</p><br/>
                <p>Genre: {this.state.genre}</p><br/>
                <p>Destination: {this.state.destination}</p><br/>
                <p>Nuts free: {this.state.nuts}</p><br/>
                <p>Lactose free: {this.state.lactose}</p><br/>
                <p>Vegan: {this.state.vegan}</p><br/>

            </>
        )
    }


}

export default FormComponent;