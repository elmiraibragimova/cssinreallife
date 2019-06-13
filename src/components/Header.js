import React, {Component} from 'react';

class Header extends Component {
  render() {
    const subtitle = `{In Real Life}`;

    return (
      <header className="page__header">
        <a href="/">
          <h1 className="logo">
            <span className="logo__title">CSS</span>
            <span className="logo__subheading">{subtitle}</span>
          </h1>
        </a>
      </header>
    )
  }
}

export default Header;