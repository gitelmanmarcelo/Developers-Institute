import React from 'react';

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = { error: null, errorInfo: null}
    }

componentDidCatch(error,errorInfo) {
    console.log('error',error);
    console.log('errorInfo',errorInfo);
    this.setState({error: error, errorInfo : errorInfo});
}

    render() {
        if (this.state.error)
            return (
                <div>
                    <h1>Something went wrong...</h1>
                </div>
            )
        else
            return this.props.children;
}

}

export default ErrorBoundary;