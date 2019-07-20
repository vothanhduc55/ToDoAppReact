import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: false
    };
  }
  // componentWillMount() {
  //   if (this.props) {
  //     this.setState([
  //       {
  //         id: this.props.task.id,
  //         name: this.props.task.name,
  //         status: this.props.task.status
  //       }
  //     ]);
  //   }
  //   console.log(this.state);
  // }

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
  };

  onCloseForm = () => {
    this.props.onCloseForm();
  };

  onClear = () => {
    this.setState({
      name: "",
      status: false
    });
  };

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Thêm công việc
            <FontAwesomeIcon
              icon="times-circle"
              pull="right"
              onClick={this.onCloseForm}
            />
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />

              <label>Trạng thái:</label>
              <select
                name="status"
                id="input"
                className="form-control"
                required="required"
                value={this.state.status}
                onChange={this.onChange}
              >
                <option value={true}>Kích hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-warning">
                Lưu lại
              </button>
              &nbsp;
              <button
                type="reset"
                className="btn btn-danger"
                onClick={this.onClear}
              >
                Hủy bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
