import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <p>{this.props.title}</p>
    );
  }
}

Header.propTypes {
  title: PropTypes.string;
}
export default Header;
