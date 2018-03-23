import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => {
  return (
    <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Lois Choi</h1>
        </Link>
        <Link className="header__title" to="/about">
          <p>About</p>
        </Link>
        <Link className="header__title" to="/resume">
          <p>Resume</p>
        </Link>
        <Link className="header__title" to="/contact">
          <p>Contact</p>
        </Link>
        <button className="button -link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
  )
}



const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
