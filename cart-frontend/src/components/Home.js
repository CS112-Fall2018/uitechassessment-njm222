import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartList: false,
            isAddItem: false
        };
    }

    render() {
        return (
            <h1>Welcome to the Homepage</h1>
        );
    }
}

export default Home;