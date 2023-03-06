import React from 'react';

class Form1 extends React.Component {

    constructor() {
        super();
        this.state = { book : null, message: ''};
    }

    onSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const book = { title: form.title.value, author: form.author.value, genre: form.genre.value, year: form.year.value};
        this.setState({ book: book });
        console.log(book);
        this.setState({message : 'data sent!'});
    }

    render() {
        return (
            <>
            <h1>New Book</h1>
            <h3>{this.state.message}</h3>
            <form onSubmit={this.onSubmit}>
            <label >Title:</label>
            <input name="title" id="title"/><br/><br/>
            <label >Author:</label>
            <input name="author" id="authot"/><br/><br/>
            <label >Genre:</label>
            <input name="genre" id="genre"/><br/><br/>
            <label >Year published:</label>
            <input name="year" id="year"/><br/><br/>
            <input type="submit" value="Submit"/><br/><br/>
            </form>
            </>
        )
    }

}

export default Form1;