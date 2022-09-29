import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>StarTravelHub</title>
        <meta name="description" content="Buy a spaceship with StarTravelHub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>StarTravelHub</h1>
        <hr />
        <p>
          Want to travel the stars? Buy a renowned spaceship with StarTravelHub!
        </p>
      </main>
    </div>
  );
}
