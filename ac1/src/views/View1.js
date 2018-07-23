import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ViewName from "./../components/ViewName";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    height: 250,
    backgroundColor: theme.palette.background.paper
  },
  subheader: {
    width: "100%"
  }
});

function View1(props) {
  const { classes, viewName } = props;

  return (
    <div>
      <ViewName viewName={viewName} />
      <div className={classes.root}>View1</div>
    </div>
  );
}

View1.propTypes = {
  viewName: PropTypes.string.isRequired
};

export default withStyles(styles)(View1);
