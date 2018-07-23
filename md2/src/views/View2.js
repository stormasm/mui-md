import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ViewName from "./../components/ViewName";
import MarkdownDocs from './../modules/components/MarkdownDocs';

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

function View2(props) {
  const { classes, viewName } = props;

  const input = '# This is a header\n\nAnd this is a paragraph\n\nUsing [react-markdown](https://github.com/rexxars/react-markdown)\n\ngood job !'

  return (
    <div>
      <ViewName viewName={viewName} />
      <div className={classes.root}>
        <MarkdownDocs markdown={input} />
      </div>
    </div>
  );
}

View2.propTypes = {
  viewName: PropTypes.string.isRequired
};

export default withStyles(styles)(View2);
