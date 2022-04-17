import React from 'react';
import Form from 'react-bootstrap/Form';
import Hawker from '../../assets/images/icons/Hawker.svg';
import Signup from '../pages/Signup/index';
import Login from '../pages/Login/index';
import Auth from '../../utils/auth';
import '../../assets/css/index.css';

function Header({ isLogin }) {

  const showButtons = () => {
    return isLogin ? (
      <a href="/signup">
        <button onClick={() => <Signup />} className='btn-primary'>Signup</button>
      </a>
    ) : (
      <a href="/login">
        <button onClick={() => <Login />} className='btn-primary'>Login</button>
      </a>
    );
  };

  function loggedIn() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <a href="/postItem"><button className='btn-primary'>Hawk Item</button></a>
          <a href="/orderHistory"><button className='btn-primary'>Order History</button></a>
          <a href="/" onClick={() => Auth.logout()}><button className='btn-primary'>Logout</button></a>
        </div>
      );
    } else {
      return showButtons();
    }
  }

  return (
      <header className="head">
        <nav>
          <div className='row'>
            <div className='col title'>Categories
              <ul className='cats'>
                <li><a href="/auto">Auto</a></li>
                <li><a href="/clothing">Clothing</a></li>
                <li><a href="/household">Household</a></li>
                <li><a href="/outdoor">Outdoor</a></li>
                <li><a href="/tech">Tech</a></li>
              </ul>
            </div>
            <div className="col">
              <a href="/">
                <span role="img" aria-label="img-name">
                  <img src={Hawker} alt="logo" className="photo" id="logo" />
                </span>
              </a>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 formField"
                  aria-label="Search"
                />
                <button className='btn-primary'>Search</button>
              </Form>
              <div className="log col">{loggedIn()}</div>
            </div>
          </div>
        </nav>
      </header>
  );
}

export default Header;
