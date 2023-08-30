import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        name: "Nguyễn Văn Vũ",
        age: 20,
        arrJob: [
            { id: '01', title: 'Developer', salary: '500' },
            { id: '02', title: 'Tester', salary: '400' },
            { id: '03', title: 'Leader', salary: '1000' }
        ]
    }
    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    addNewJob = (job) => {
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }
    deleteAJob = (job) => {

        let aJob = this.state.arrJob;

        aJob = aJob.filter((item) => item.id !== job.id);
        this.setState({
            arrJob: aJob
        })
    }
    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent name={this.state.name}
                    listJob={this.state.arrJob}
                    delJob={this.deleteAJob}
                />
            </>

        )
    }
}

export default MyComponent;