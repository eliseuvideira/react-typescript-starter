import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header``;

const Nav = styled.nav``;

const Header: React.FC<{ title: string }> = ({ title }) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <StyledHeader>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Nav>
    </StyledHeader>
  </>
);

export default Header;
