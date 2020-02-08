import React from 'react';
import Head from 'next/head';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Home = () => {
  const { data, error } = useSWR('/api/todos', fetcher);
  const errorMessage = error?.message;
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
        <h1 className="title">Next.js api mocking with MirageJS</h1>
        <p className="description"></p>
        <div>Error: {errorMessage}</div>
        <div>Data: {JSON.stringify(data, null, 2)}</div>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }

        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 36px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Home;
