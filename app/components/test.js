import React, { Component } from 'react';
import { create } from 'apisauce';

const api = create({
  baseURL: 'https://test-d15a6.firebaseio.com',
});

const validEndpoints = ['abys', 'ayana'];

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, text: "" }
  }

  componentDidMount() {
    if(validEndpoints.includes(this.props.params.studio)) {
      api.get(`/${this.props.params.studio}.json`)
      .then((response) => { this.setState({ isLoading: false, text: response.data }) })
    } else {
      this.setState({ isLoading: false, text: "Invalid route" })
    }
  }

  render() {
    if(this.state.isLoading) {
      return (<p>Loading ...</p>);
    }
    return (
      <p>{this.state.text}</p>
    );
  }
}
