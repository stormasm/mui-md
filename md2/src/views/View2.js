import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ViewName from "./../components/ViewName";
import MarkdownDocs from "./../modules/components/MarkdownDocs";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 20,
    flex: "1 1 100%",
    maxWidth: "100%",
    margin: "0 auto"
  })
});

function View2(props) {
  const { classes, viewName, markdown } = props;

  const input =
    "# This is a header for md2\n\nAnd this is a paragraph\n\nUsing [react-markdown](https://github.com/rexxars/react-markdown)\n\ngood job !\n\n # Header 2\n\nThis is working well !\n\n ### Header 3\n\nLife is good\n\n # Header 4\n\n The scrolling is working correctly...";

  return (
    <div>
      <ViewName viewName={viewName} />
      <div className={classes.root}>
        <MarkdownDocs markdown={markdown} />
      </div>
    </div>
  );
}

View2.propTypes = {
  viewName: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired
};

export default withStyles(styles)(View2);
