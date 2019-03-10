import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartList: false,
            isAddItem: true,
            name: '',
            description: '',
            price: '',
            amount: '',
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }

    handleClearForm() {
        this.setState({
            name: '',
            description: '',
            price: '',
            amount: '',
            error: null
        })
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const currState = this.state;

        const item = {
            name: currState.name,
            description: currState.description,
            price: currState.price,
            amount: currState.amount
        };

        let itemToAdd = item;

        fetch('/item/add/',{
            method: "POST",
            body: JSON.stringify(itemToAdd),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data =>{
                console.log("Successful" + data);
                this.handleClearForm();
                document.getElementById("newItemForm").reset();
            })
        }, (error) => {
            this.setState({
                error
            });
        });

        alert('A new item ' + this.state.name + ' was added to the cart');

    }


    render() {
        return (
            <div>
                <h1>Welcome to the Add Item</h1>
                <form id="newItemForm" onSubmit={this.handleSubmit}>
                    <div className="form-row m-2">
                        <div className="col">
                            <div className="form-group">
                                <label>
                                    Name:
                                    <input className="form-control my-2" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>
                                    Price:
                                    <input className="form-control my-2" type="text" name="price" value={this.state.price} onChange={this.handleChange} />
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label>
                                    Amount:
                                    <input className="form-control my-2" type="text" name="amount" value={this.state.amount} onChange={this.handleChange} />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row mx-2">
                        <div className="col">
                            <div className="form-group">
                                <label className="w-100">
                                    Description:
                                    <textarea className="form-control my-2" name="description" value={this.state.description} onChange={this.handleChange} />
                                </label>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Add new item" />
                </form>
            </div>
        );
    }
}

export default Item;