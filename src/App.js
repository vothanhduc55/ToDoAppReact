import React, { Component } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

import {
  faCheckSquare,
  faCoffee,
  faTimesCircle,
  faPlus,
  faSearch,
  faSortAlphaDownAlt,
  faSortAlphaUpAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faTimesCircle,
  faPlus,
  faSearch,
  faSortAlphaDownAlt,
  faSortAlphaUpAlt
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false
    };
  }

  componentWillMount = () => {
    if (localStorage && localStorage.getItem("tasks")) {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks
      });
    }
  };

  // GenerateData = () => {
  //   var data = [
  //     {
  //       id: this.GenerateId(),
  //       name: "Angular",
  //       status: true
  //     },

  //     {
  //       id: this.GenerateId(),
  //       name: "ReactJS",
  //       status: false
  //     },

  //     {
  //       id: this.GenerateId(),
  //       name: "React-Native",
  //       status: true
  //     }
  //   ];
  //   this.setState({
  //     tasks: data
  //   });

  //   localStorage.setItem("tasks", JSON.stringify(data));
  // };

  s4() {
    return Math.floor((1 + Math.random()) * 0x1000)
      .toString(16)
      .substring(1);
  }

  GenerateId() {
    return (
      this.s4() + this.s4() + this.s4() + this.s4() + this.s4() + this.s4()
    );
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  };

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  };

  onSubmit = data => {
    var taskfromSubmit = this.state.tasks;
    data.id = this.GenerateId();
    taskfromSubmit.push(data);
    this.setState({
      tasks: taskfromSubmit
    });
    localStorage.setItem("tasks", JSON.stringify(taskfromSubmit));
  };

  render() {
    var { tasks, isDisplayForm } = this.state;
    var elmTaskForm = isDisplayForm ? (
      <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} />
    ) : (
      ""
    );
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản lý công việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDisplayForm === true
                ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                : ""
            }
          >
            {/* Form left*/}
            {elmTaskForm}
          </div>
          <div
            className={
              isDisplayForm === true
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <FontAwesomeIcon icon="plus" onClick={this.onCloseForm} /> Thêm
              công việc
            </button>
            {/* Search and sort */}
            <Control />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={tasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
