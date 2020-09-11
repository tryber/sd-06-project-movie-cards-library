import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
  render() {
    const header = <header><h1>Movie Cards Library</h1></header>;
    return header;
  }
}
Header.PropTypes = { header: PropTypes.string };
export default Header;
