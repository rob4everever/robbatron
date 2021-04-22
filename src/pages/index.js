/**
 * index.js
 * Website homepage
 */

import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout pageConfig={pageConfig}>
      <h1>Hello, World!</h1>
    </Layout>
  );
}

//passed to the metadata component to set some properties
const pageConfig = {
  title: 'home',
  description: 'Portfolio website built by @robbatr0n',
};
