import React from 'react'

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "",
            lists: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
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

    handleCheckboxClick = (event) => {
        console.log(event.currentTarget.getAttribute('data-num'));
    }

    render() {
        return (
            <div className="wrap">
            <form onSubmit={this.handleSubmit} className="form">
                <input type="text" placeholder="やらなければいけないこと" className="form-input" onChange={this.handleChange} value={this.state.value}/>
            </form>
                {
                    this.state.lists.map((value, index) => (
                        <div className="lists">
                            <input type="checkbox" data-num={index} onClick={this.handleCheckboxClick}/>
                            <span>{value}</span>
                            <button>✖️</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Form;