import React from "react";

class SaveComponent extends React.Component {
    state = {
        title: ''
    }

    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    addJob = () => {
        if (!this.state.title) {
            alert('Vui lòng nhập dữ liệu')
            return
        }
        this.props.addJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        })

        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div className="save-container">
                <input type="text" className="title" value={this.state.title}
                    onChange={(event) => this.handleOnchangeTitle(event)} />
                <button type="button" className="btn-save" onClick={this.addJob}>Save</button>
            </div>
        )
    }
}

export default SaveComponent;