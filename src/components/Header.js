import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SiteHeading = styled.div`
  text-align:center;
  margin-top:30px;
  color: #046B99;
`

const NavWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
  a{
    font-weight:bold;
    margin:0px 5px;
    background: #f5f5f5;
    padding: 10px 15px;
    border-radius: 4px;
    color: #046B99;
  }
  a.active{
    color:white;
    background: #046B99;
  }
`

const Header = () => {
  return (
    <React.Fragment>
      <SiteHeading>
        <h1>Hacker News Clone</h1>
      </SiteHeading>
      <NavWrapper className="nav-link">
        <NavLink to="/top" activeClassName="active">
          Top Stories
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          Latest Stories
        </NavLink>
        <NavLink to="/best" activeClassName="active">
          Best Stories
        </NavLink>
      </NavWrapper>
    </React.Fragment>
  );
};

export default Header;