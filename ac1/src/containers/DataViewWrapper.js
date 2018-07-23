import React from "react";
import PropTypes from "prop-types";
import DataView from "./DataView";

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
  }

  componentDidMount() {
    this.setState({ isLoading: false });
    this.setState({ viewName: this.props.view });
  }

  render() {
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div>
        <DataView viewName={this.state.viewName} />
      </div>
    );
  }
}

DataViewWrapper.propTypes = {
  view: PropTypes.string.isRequired
};

export default DataViewWrapper;
