import Head from 'next/head';

import Layout from '../components/Layout';
import Property from '../components/property';

export default function Home() {
  return (
    <>
      <Layout>
        <Property />
      </Layout>
    </>
  );
}
