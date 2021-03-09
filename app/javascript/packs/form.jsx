import React from 'react';
import {Button, Box} from '@material-ui/core';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "",
            lists: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            lists: [
                ...this.state.lists,
                this.state.value
            ],
            value: ""
        })
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleDeleteClick = (event) => {
        let index = event.currentTarget.getAttribute('data-num');
        let copyState = this.state.lists.slice();
        copyState.splice(index, 1);

        this.setState({lists: copyState});
    }

    buttonStyles = {
        maxWidth: '30px',
        maxHeight: '30px',
        minHeight: '30px',
        minWidth: '30px'
    }

    render() {
        return (
            <div className="wrap">
            <form onSubmit={this.handleSubmit} className="form">
                <input type="text" placeholder="  やらなければいけないこと" className="form-input" onChange={this.handleChange} value={this.state.value}/>
            </form>
                {
                    this.state.lists.map((value, index) => (
                        <div className="lists">
                            <input type="checkbox" id="checkBox" className="box-span-checkbox"/>
                            <span className="box-span-checkbox" id="value-span">{value}</span>
                            <Box className="box-span-checkbox" id="crossButtonBox"> 
                            <Button data-num ={index} onClick={this.handleDeleteClick} style={this.buttonStyles} id="crossButton">✖️</Button>
                            </Box>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Form;