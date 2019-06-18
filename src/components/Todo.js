import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addTodoAction, deleteTodo } from "../action/changeAction";
import OneTodo from "./OneTodo";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", time: "" };
  }

  textUpdate = e => {
    this.setState({ text: e.target.value });
  };

  timeUpdate = ev => {
    this.setState({ time: ev.target.value });
  };

  addTodo = () => {
    this.props.addTodoAction(this.state.text, this.state.time);
    this.setState({ text: "", time: "" });
  };

  delete = id => {
    this.props.deleteTodo(id);
  };

  render() {
    var listItems = this.props.todos.map(item => (
      <OneTodo
        delete={this.delete}
        id={item.id}
        key={item.id}
        EachItem={item}
      />
    ));

    return (
      <div>
        <input
          value={this.state.text}
          onChange={this.textUpdate}
          type="text"
          placeholder="Enter value"
        />
        <input
          onChange={this.timeUpdate}
          type="number"
          value={this.state.time}
        />
        <button onClick={this.addTodo}>Add</button>
        {listItems}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodoAction,
      deleteTodo
    },
    dispatch
  );

const hoc = connect(
  mapStateToProps,
  mapDispatchToProps
);

const newTodo = hoc(Todo);

export default newTodo;
