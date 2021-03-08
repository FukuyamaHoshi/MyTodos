import React from 'react'

class Form extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="やらなければいけないこと"/>
            </form>
            </div>
        )
    }
}

export default Form;