import React from 'react';
import { withRouter } from 'react-router-dom';

class FormEx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      address: 'This is the surat so i am proud of you surat.',
      city: '',
      name: "Gaurav",
      count: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value,
    });
  }

  handleCitySelectChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  onCountClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  
  handleSubmit(e) {
    e.preventDefault();
    console.log("submit data", this.state.address);
  }

  componentDidMount() {
    this.setState({ name: "Gaurav Sanjay Sali" });
  }

  render() {
    return (
      <div>
        Name : <input type="text" value={this.state.value} onChange={this.handleChange} /><br />
        Address : <textarea name="address" value={this.state.address} onChange={this.handleAddressChange} /><br />
        City : <select value={this.state.city} onChange={this.handleCitySelectChange} >
          <option value="Surat">Surat</option>
          <option value="Baroda">Baroda</option>
          <option value="Nashik">Nashik</option>
          <option value="Pune">Pune</option>
        </select><br />
        <button onClick={this.handleSubmit}>Submit</button>
        <h2>My Name is {this.state.name}</h2>

        <h2>{this.state.count}</h2><br />
        <button onClick={this.onCountClick}>Submit</button>
      </div>
    )
  }
}

export default withRouter(FormEx);