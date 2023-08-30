import React from "react";
import SaveComponent from "./SaveComponent";
import '../Todo/main.css';

class MainComponent extends React.Component {
    state = {
        listJob: [
            { id: 1, title: 'Lập trình Web' },
            { id: 2, title: 'Lập trình Mobile' },
            { id: 3, title: 'Thiết kế Web' }
        ]
    }

    addJob = (job) => {
        this.setState({
            listJob: [...this.state.listJob, job]
        })
    }
    deleteJob = (job) => {
        let aJob = this.state.listJob;

        const a = aJob.filter((item) => item.id !== job.id);

        this.setState({
            listJob: a
        })

    }
    render() {
        let { listJob } = this.state;
        return (
            <div className="container">
                <SaveComponent
                    addJob={this.addJob} />
                <div className="list-todo">
                    {listJob && listJob.length > 0 &&
                        listJob.map((item, index) => {
                            return (
                                <div className="todoList" key={item.id}>
                                    <span>{item.id} -- {item.title}</span>
                                    <button type="button" className="btn-edit">Edit</button>
                                    <button type="button" className="btn-delete" onClick={() => this.deleteJob(item)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}

export default MainComponent;