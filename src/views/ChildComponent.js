import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJob: false
    }
    changeShow = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    deleteJob = (job) => {

        this.props.delJob(job)
    }
    render() {

        let { showJob } = this.state;
        return (
            <>
                {showJob === false ?
                    <div><button onClick={this.changeShow}>show</button></div>
                    :
                    <>
                        <div>
                            {
                                this.props.listJob.map((item, index) => {
                                    if (item.salary >= 500) {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary} <button onClick={() => this.deleteJob(item)}>x</button>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div><button onClick={this.changeShow}>hide</button></div>
                    </>
                }

            </>

        )
    }
}
// const ChildComponent = (props) => {
//     let { job } = props;
//     return (
//         <div>
//             {
//                 job.map((item, index) => {
//                     if (item.salary >= 500) {
//                         return (
//                             <div key={item.div}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     }
//                 })
//             }
//         </div>
//     )
// }
export default ChildComponent;