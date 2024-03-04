import React, { Component } from 'react'
import axios from 'axios'


export default class Tasks extends Component {
    state = {
        title: "Task_One",
        tasks: [],
        min: 0,
        max: 5
    }

    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/todos")
            .then(res => {
                console.log(res.data)
                this.setState({ tasks: res.data })
            })
            .catch(err => console.log(err))
    }

    nextTasks = () => {
        if (this.state.max >= this.state.tasks.length) {
            this.setState({ min: 0 })
            this.setState({ max: 5 })
        } else {
            this.setState({ min: this.state.min + 5 })
            this.setState({ max: this.state.max + 5 })
        }
    }
    prevTasks = () => {
        if (this.state.min === 0) {
            this.setState({ min: this.state.tasks.length - 5 })
            this.setState({ max: this.state.tasks.length })
        } else {
            this.setState({ min: this.state.min - 5 })
            this.setState({ max: this.state.max - 5 })
        }

    }

    render() {
        return (
            <>



                {/* <button className="btn btn-dark w-100 mt-5 btn-next" onClick={this.nextTasks}>Next</button>
                <button className="btn btn-dark w-100 mt-5 btn-prev" onClick={this.prevTasks}>Previous</button> */}
                <table class="table table-success table-striped table-borderless w-75 mx-auto">
                    <svg onClick={this.prevTasks} xmlns="http://www.w3.org/2000/svg" width="40" height="40"  class="bi bi-arrow-left-circle-fill btn-prev" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg>
                    <svg onClick={this.nextTasks} xmlns="http://www.w3.org/2000/svg" width="40" height="40"  class="bi bi-arrow-right-circle-fill btn-next" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tasks.map((task) => {
                            if (task.id > this.state.min && task.id <= this.state.max)
                                return (
                                    <tr key={task.id}>
                                        <td>{task.id}</td>
                                        <td>{task.title}</td>
                                        <td>{task.completed ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check-circle text-success" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                            <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-circle text-danger" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                        </svg>}</td>
                                    </tr>
                                )
                        })}


                    </tbody>
                </table>
            </>
        )
    }
}
