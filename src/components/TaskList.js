import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  render() {
    var { tasks } = this.props;
    var elementTasks = tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          index={index}
          task={task}
          onUpdateStatus={this.props.onUpdateStatus}
          onUpdate={this.props.onUpdate}
          onDelete={this.props.onDelete}
        />
      );
    });

    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <input type="text" name="" className="form-control" title="" />
            </td>
            <td>
              <select name="" className="form-control">
                <option value={-1}>Tất cả</option>
                <option value={0}>Kích hoạt</option>
                <option value={1}>Chưa kích hoạt</option>
              </select>
            </td>
            <td />
          </tr>
          {/* Item list to do  */}
          {elementTasks}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
