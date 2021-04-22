/**
 * layout.js
 * Resuable component that defines the layout of each page of the site.
 * Brings in global styles and metadata.
 */

import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import Metadata from './metadata';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageConfig: PropTypes.object.isRequired,
};

export default function Layout({ children, pageConfig }) {
  return (
    <>
      <Metadata pageTitle={pageConfig.title} pageDescription={pageConfig.description} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}
