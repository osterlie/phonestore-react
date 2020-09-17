import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
  render() {
    return(
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/*https://cdn0.iconfinder.com/data/icons/essential-pack-4/512/14-2-512.png
          https://creativecommons.org/licenses/by/3.0/*/}
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
              My Cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }Link
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform: capitalize;
}
`;
