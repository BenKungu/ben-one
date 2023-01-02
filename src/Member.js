import React, { Component } from "react";

class Member extends Component {
  state = {
    member: 0,
  };

  increment = () => {
    this.setState({
      member: this.state.member + 1,
    });
    console.log(this.state.member);
  };

  render() {
    return (
      <>
        <div>Number: {this.state.member} </div>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}
export default Member;
