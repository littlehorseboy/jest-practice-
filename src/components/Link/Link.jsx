import React from 'react';
import PropTypes from 'prop-types';

class Link extends React.Component {
  render() {
    return (
      <a href={this.props.page}>{this.props.children}</a>
    );
  }
}

Link.propTypes = {
  children: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default Link;
