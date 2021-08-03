import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="title" content="About Me" />
        <meta name="description" content="About Me" />
      </Head>
      <h1>About Me</h1>
      <br />
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default About;
