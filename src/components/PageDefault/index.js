import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 50px;
  ${({ paddingAll }) => paddingAll != null && css`
  padding: ${paddingAll}`};
`;

const PageDefault = ({ children, paddingAll }) => (
  <>
    <Menu />
    <Main paddingAll={paddingAll}>
      {children}
    </Main>
    <Footer />
  </>
);

PageDefault.defaultProps = {
  children: null,
  paddingAll: null,
};

PageDefault.propTypes = {
  children: PropTypes.node,
  paddingAll: PropTypes.number,
};

export default PageDefault;
