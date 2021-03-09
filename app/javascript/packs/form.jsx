import React from 'react'
import Button from '@material-ui/core/Button'

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

    render() {
        return (
            <div className="wrap">
            <form onSubmit={this.handleSubmit} className="form">
                <input type="text" placeholder="  やらなければいけないこと" className="form-input" onChange={this.handleChange} value={this.state.value}/>
            </form>
                {
                    this.state.lists.map((value, index) => (
                        <div className="lists">
                            <input type="checkbox"/>
                            <span>{value}</span>
                            <Button data-num ={index} onClick={this.handleDeleteClick} size="small">✖️</Button>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Form;