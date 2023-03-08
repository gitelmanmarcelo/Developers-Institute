import React from 'react'

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { error : null }
    }

    componentDidCatch = (error,errorInfo) => {
        console.log('err',error);
        this.setState({error:error})
    }

    render() {
        if (this.state.error){
            return (
                <>
                <h2>error</h2>
                </>
            )
        }
        else
            return (
                <>
                {this.props.children}
                </>
            )
    }
}

export default ErrorBoundary;