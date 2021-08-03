import Link from 'next/link';
import Layout from '../../components/layout';

const FirstPost = () => {
  return (
    <Layout>
      <h1>First Post</h1>
      <br />
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
};

export default FirstPost;
