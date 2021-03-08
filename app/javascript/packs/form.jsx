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
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            lists: [
                ...this.state.lists,
                this.state.value
            ]
        })
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="form-wrap">
            <form onSubmit={this.handleSubmit} className="form">
                <input type="text" placeholder="やらなければいけないこと" className="form-input" onChange={this.handleChange}/>
            </form>
            </div>
        )
    }
}

export default Form;