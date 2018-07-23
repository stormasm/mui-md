import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import warning from 'warning';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MarkdownElement from '@material-ui/docs/MarkdownElement';
import AppContent from './AppContent';

import {
  getHeaders,
  getContents,
  getTitle,
  getDescription,
} from './../utils/parseMarkdown';

const styles = theme => ({
  root: {
    marginBottom: 100,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  markdownElement: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    padding: `0 ${theme.spacing.unit}px`,
  },
});

const demoRegexp = /^"demo": "(.*)"/;
const SOURCE_CODE_ROOT_URL = 'https://github.com/mui-org/material-ui/tree/master';

function MarkdownDocs(props, context) {
  const { classes, demos, markdown } = props;
  const contents = getContents(markdown);
  const headers = getHeaders(markdown);

  const section = 'lab';

  return (
    <AppContent className={classes.root}>
      {contents.map((content, index) => {
        return <MarkdownElement className={classes.markdownElement} key={content} text={content} />;
      })}
      {headers.components.length > 0 ? (
        <MarkdownElement
          className={classes.markdownElement}
          text={`
## API

${headers.components
            .map(
              component =>
                `- [&lt;${component} /&gt;](${section === 'lab' ? '/lab/api' : '/api'}/${kebabCase(
                  component,
                )})`,
            )
            .join('\n')}
          `}
        />
      ) : null}
    </AppContent>
  );
}

MarkdownDocs.propTypes = {
  classes: PropTypes.object.isRequired,
  demos: PropTypes.object,
  markdown: PropTypes.string.isRequired,
  // You can define the direction location of the markdown file.
  // Otherwise, we try to determine it with an heuristic.
  markdownLocation: PropTypes.string,
};

export default withStyles(styles)(MarkdownDocs);
