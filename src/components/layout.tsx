import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
import Styles from './styles';
import { Helmet } from 'react-helmet';
import { typography } from '../utils/typography';

const Main = styled.main``;

const Layout: React.FC<React.PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => (
  <>
    <Helmet>
      <style>{`${typography.createStyles()}`}</style>
    </Helmet>
    <Styles>
      <Header title={title} />
      <Main>{children}</Main>
      <Footer />
    </Styles>
  </>
);

export default Layout;
