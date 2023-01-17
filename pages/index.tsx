import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {NextPageContext} from "next";
import {ingredients, sandwiches, structures} from "../clients/mockDB";

type Props = {
  ingredients: typeof ingredients;
  sandwiches: typeof sandwiches;
  structures: typeof structures;
}

export async function getServerSideProps({req}: NextPageContext) {
  const url = `http://${req?.headers.host}/api/`;

  const responses = await Promise.all([
    fetch(`${url}/ingredients`),
    fetch(`${url}/structures`),
    fetch(`${url}/sandwiches`)
  ])

  const [
    ingredients,
    structures,
    sandwiches
  ] = await Promise.all(responses.map(response => response.json()))

  return {
    props: {
      ingredients,
      structures,
      sandwiches
    }
  }
}

export default function Home({sandwiches, ingredients, structures}: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Service Hero - Coding Challenge</title>
        <meta name="description" content="Service Hero fullstack coding challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the
          <br/>
          Service Hero Coding Challenge!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
          <br/>
          <strong>sandwiches, ingredients & structures</strong> are already in the <code>props</code> of the page
          <br/>
          Now we need to make the grid of <u>sandwiches</u> using the ingredients as <u>columns</u>
          {' '}and the structures as <u>rows</u>.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>I should be a sandwich</h2>
            <p>You can use the <code>styles.grid</code> <br/>classname to arrange the sandwiches here.</p>
          </div>

          <div className={styles.card}>
            <h2>I need a column header</h2>
            <p>The grid is 3x3 meaning all the sandwiches should fit and be visible.</p>
          </div>

          <div className={styles.card}>
            <h2>BLT</h2>
            <img alt={'BTL sandwich'} src={'/sandwiches/BLT.png'}/>
          </div>

          <div className={styles.card}>
            <h2>I need a row header</h2>
            <p>This is how rows should look like, once you have 3 of them it will look much nicer!</p>
          </div>

          <div className={styles.card}>
            <h2>Endpoints are free!</h2>
            <p>Take a look at the <u>pages/api/</u> directory, it contains all the endpoints to get the data.</p>
          </div>

          <div className={styles.card}>
            <h2>Your mission if you choose to take it:</h2>
            <p>In <u>pages/api/zodiacSigns.tsx</u> you will need to make the function that will return
              the zodiac sign based on the <u>3 sandwiches</u> the user chose.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
