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

    // Do NOT Delete for awhile --- helpful for debugging...
/*
    const locationChanged = nextProps.location !== this.props.location;
    console.log("componentWillUpdate");
    console.log("locationChanged: ", locationChanged);
    console.log(nextProps.location);
    console.log(nextProps.match.params.repo);
    console.log(nextProps.match.params.view);
    //console.log(repoMap[nextProps.match.params.repo]);
*/

    this.setState({ isLoading: true });
    this.setState({ viewName: nextProps.view });
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.setState({ viewName: this.props.view });
  }

  render() {
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }
/*
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }
*/
    //console.log('ok');

    return (
      <div>
        <DataView
          viewName={this.state.viewName}
        />
      </div>
    );
  }
}

DataViewWrapper.propTypes = {
  view: PropTypes.string.isRequired
};

export default DataViewWrapper;
