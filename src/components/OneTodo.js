import React, { Component } from "react";

class OneTodo extends Component {
  componentDidMount() {
    setTimeout(function() {
      alert("Complete Your Task!!!!!");
    }, this.props.EachItem.deadline);
  }

  del = () => {
    this.props.delete(this.props.id);
  };

  render() {
    return (
      <div>
        <p>
          {this.props.EachItem.text}&nbsp;{this.props.EachItem.deadline}&nbsp;
          <button onClick={this.del}>Delete</button>
        </p>
      </div>
    );
  }
}

export default OneTodo;
