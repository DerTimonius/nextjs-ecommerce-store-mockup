import Head from 'next/head';

function About() {
  return (
    <div>
      <Head>
        <title>About us</title>
        <meta name="description" content="What you need to know about us" />
      </Head>
      ^
      <main>
        <h4>Dear Adventurer!</h4>
        <hr />
        <p>
          Thank you for stumbling across this store. You will probably have
          figured it out by now, but this is of course not a real webstore. You
          can't buy anything here, if you were to actually check out your order,
          nothing would happen. All the input you have given will be deleted and
          are not stored.
        </p>
        <br />
        <p>
          Having said that, this actually has all the functionality of a real
          e-commerce store (aside from it being fake of course).
        </p>
      </main>
    </div>
  );
}

export default About;
