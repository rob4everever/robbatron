/**
 * metadata.js
 * Uses next/head to add metadata to the site.
 */

import PropTypes from 'prop-types';
import Head from 'next/head';

Metadata.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string,
};

export default function Metadata({ pageTitle, pageDescription }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{pageTitle} | robbatron</title>
      <meta name="viewport" content="width=device-width" />
      <meta name="description" content={pageDescription} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}
