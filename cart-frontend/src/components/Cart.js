import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartList: true,
            isAddItem: false,
            isLoaded: false,
            items: [],
            error: null
        };
    }

    componentDidMount() {
        fetch('/list')
            .then(res => res.json())
            .then(
                (jsonRes) => {
                    this.setState({
                        isLoaded: true,
                        items: jsonRes
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading... Please Wait</div>;
        } else {
            return (
                <div>
                    <h1>Welcome to the Cart List</h1>
                    <ul className="cartList">
                        {items.map(item => (
                            <li className="my-4" key={item.id}>
                                <div className="d-flex justify-content-between">
                                    <h4 className="mx-2">Item: {item.name}</h4>
                                    <h4 className="mx-2">Price: {item.price}</h4>
                                    <h4 className="mx-2">Amount: {item.amount}</h4>
                                </div>
                                <div>
                                    <p className="mx-2">Description: {item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default Cart;