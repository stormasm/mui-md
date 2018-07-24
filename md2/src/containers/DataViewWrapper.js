import React from "react";
import PropTypes from "prop-types";
import DataView from "./DataView";

const template =
  "https://raw.githubusercontent.com/stormasm/ghdata/master/markdown/data1/";

class DataViewWrapper extends React.Component {
  constructor(props) {
    super(props);

    const { view } = props;

    this.state = {
      data: {},
      isLoading: false,
      error: null,
      viewName: view
    };
  }

  componentWillReceiveProps(nextProps) {

    this.setState({ isLoading: true });
    this.setState({ viewName: nextProps.view });

    const url = template + nextProps.view + '.md';
    console.log('1', url);

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          throw new Error(
            "Sorry, something went wrong in the DataViewWrapper part I"
          );
        }
      })
      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.setState({ viewName: this.props.view });

    const url = template + this.state.viewName + '.md';
    console.log('2', url);

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          throw new Error(
            "Sorry, something went wrong in the DataViewWrapper part II"
          );
        }
      })
      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {

    console.log(this.state.data);

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <DataView viewName={this.state.viewName} markdown={'cool'}/>
      </div>
    );
  }
}

DataViewWrapper.propTypes = {
  view: PropTypes.string.isRequired
};

export default DataViewWrapper;
