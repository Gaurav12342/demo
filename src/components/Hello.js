import React from 'react';
import { withRouter } from 'react-router-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      arrayData: ["Gaurav", "Sanjay", "Vijay", "Paresh", "jayesh"]
    };
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  ans = () => {
    alert("Click the button....!");
  }

  render() {
    return (
      <div>
        {/* <h1>My Name Is {this.props.name.toLocaleTimeString()}</h1> */}
        <h2>The Time Is {this.state.date.toLocaleTimeString()}</h2>
        <h3>It Is Your Time {this.state.date.toLocaleTimeString()}</h3>
        <button onClick={this.ans}>Submit</button>
        {/* {console.log({...this.state.arrayData})} */}


      </div>
    )
  }
}
export default withRouter(Hello);