import React from "react";
import PropTypes from "prop-types";

import DataViewWrapper from "./../containers/DataViewWrapper";

const GetParamsFromMatch = match => {
  const url = match.url;
  let result = url.split("/");

  console.log('Getparamsfrommatch = ', result)

  let ary = result[1];
  return ary;
};

const GetSectionFromPathname = pathname => {
  let result = pathname.split("/");
  return result[1];
};

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  // shouldComponentUpdate(nextProps,nextState) {
  shouldComponentUpdate(nextProps) {
    const p1 = nextProps.location.pathname;
    const p2 = this.props.location.pathname;

    //console.log(p1 + ' ' + p2);

    const repo1 = GetSectionFromPathname(p1);
    const repo2 = GetSectionFromPathname(p2);

    //console.log(repo1 + ' ' + repo2);

    const result = repo1.localeCompare(repo2);

    if (result) {
      return true;
    }

    return false;
  }

  render() {
    // leave next line here just to show what props
    // from the react-router are actually available
    // const { match, location, history } = this.props
    const { match } = this.props;

    const result = GetParamsFromMatch(match);

    console.log(result);

    return (
      <div>
        <div>
          <DataViewWrapper view={result} />
        </div>
      </div>
    );
  }
}

export default ShowTheLocation;
