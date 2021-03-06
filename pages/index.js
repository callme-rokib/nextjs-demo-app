import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ members, allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{ marginTop: '550px' }}>
        {/* <Image src="/towing.png" alt="towing" width={250} height={150} /> */}
        <h1 className={styles.title}>Next Js</h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
          <br />
          <Link href="/about">
            <a>About Me</a>
          </Link>{' '}
          |{' '}
          <Link href="/posts/first-post">
            <a>Firs Post</a>
          </Link>
        </p>

        <br />
        <h1>Blog File From MD</h1>

        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>

        <br />
        <h1>Qtemu Members</h1>
        <br />

        <ul>
          {members.length > 0
            ? members.map((member) => <li key={member.id}>{member.name}</li>)
            : 'No members'}
        </ul>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      <style jsx>{`
        p {
          color: black;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  // get file from API
  const apiURL = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(apiURL);
  const data = await response.json();

  // get file from md
  const allPostsData = getSortedPostsData();

  return {
    props: {
      members: data,
      allPostsData,
    },
  };
}
