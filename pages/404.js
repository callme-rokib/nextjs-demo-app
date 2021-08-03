import Link from 'next/link';

const Custom404 = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <br />
      <Link href="/">
        <a>Back To Home Page</a>
      </Link>
    </>
  );
};

export default Custom404;
