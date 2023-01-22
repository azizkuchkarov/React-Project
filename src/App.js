import logo from "./logo.svg";
import "./App.css";
import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      age: "",
    };
  }
  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  onDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  onRestart = () => {
    this.setState({
      counter: (this.state.counter = 0),
    });
  };

  changeHandler = (e) => {
    this.setState({
      age: e.target.value,
    });
  };

  render() {
    const { firstname, lastName, link } = this.props;
    const { age, counter } = this.state;
    return (
      <div className="w-50 mx-auto">
        <div className="border p-3 mt-5">
          <h4>
            Mening ismim - {firstname} and sharifim {lastName} {age}
          </h4>
          <a href={link}>Youtube</a>;
          <div className="mt-3">
            <button onClick={this.onIncrement} className="btn btn-success">
              Click
            </button>
            <button onClick={this.onDecrement} className="btn btn-danger">
              Decrement
            </button>
            <button onClick={this.onRestart} className="btn btn-info">
              Restart
            </button>
            <p>{counter}</p>
          </div>
          <form>
            <span>Yoshingiz</span>
            <input
              type="text"
              className="form-control"
              onChange={this.changeHandler}
            />
          </form>
        </div>
      </div>
    );
  }
}

/*const User = ({ firstname, lastName, link }) => {
  return (
    <div>
      <h1>
        Mening ismim - {firstname.name} and sharifim {lastName}
      </h1>
      <a href={link}>Youtube</a>;
    </div>
  );
};
*/
const App = () => {
  return (
    <div>
      <User firstname="Hello" lastName="Helo" link="youtube.com" />
      ;
      <User firstname="Laziz" lastName="Boqiev" link="youtube.com" />;
    </div>
  );
};

export default App;
