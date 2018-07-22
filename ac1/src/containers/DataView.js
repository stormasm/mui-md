import React from "react";
import PropTypes from "prop-types";

import View1 from "./../views/View1";
import View2 from "./../views/View2";

function DataView(props) {
  const { tileData, repoName, viewName } = props;

  if (viewName === "view1") {
    return (
      <View1 viewName={viewName} />
    );
  }
/*
  if (viewName === "view2") {
    return (
      <View2 tileData={tileData} repoName={repoName} viewName={viewName} />
    );
  }
*/
  return <View2 viewName={viewName} />;
}

DataView.propTypes = {
  viewName: PropTypes.string.isRequired
};

export default DataView;
