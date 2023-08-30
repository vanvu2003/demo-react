import React from "react";

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: ""
    }
    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnchangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    onClickChange = () => {
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        });
    }
    render() {
        return (
            <form>
                <div>
                    <label>Title:</label> <br />
                    <input type="text" onChange={(event) => this.handleOnchangeTitle(event)}></input>
                </div>
                <div>
                    <label>Salary:</label> <br />
                    <input type="text" onChange={(event) => this.handleOnchangeSalary(event)}></input>
                </div>
                <br />
                <button type="button" onClick={this.onClickChange}>Save</button>
            </form>
        )
    }
}

export default AddComponent