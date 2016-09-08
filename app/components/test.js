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

    this.handleApiCall = this.handleApiCall.bind(this);
  }

  handleApiCall(studio) {
    if(validEndpoints.includes(studio)) {
      api.get(`/${studio}.json`)
      .then((response) => { this.setState({ isLoading: false, text: response.data }) })
    } else {
      this.setState({ isLoading: false, text: "Invalid route" })
    }
  }

  componentDidMount() {
    this.handleApiCall(this.props.params.studio);
  }

  componentWillReceiveProps(nextProp) {
    this.setState({ isLoading: true, text: "Loading" })
    this.handleApiCall(nextProp.params.studio);
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
