import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {NextPageContext} from "next";
import {ingredients, sandwiches, structures} from "../clients/mockDB";
import HeaderRow from './components/HeaderRow';
import BodyRow from './components/BodyRow';
import Content from './components/Content';
import ZodiacSign from './components/ZodiacSign';
import useGetZodiacSign from './useGetZodiacSign';
import { getTableRows } from './utils';

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
  const tableRows = getTableRows({ sandwiches, ingredients, structures });

  const { loadZodiacSign, setSelectedSandwicheLabels, zodiacSign, sandwicheLabels, isLoading, isLoadButtonDisabled, error } = useGetZodiacSign();

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

        <div>
          <h2>Selection rule: You need to select 3 sandwiches to get your zodiac sign</h2>
        </div>

        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${isLoadButtonDisabled ? 'disabled' : ''}`} onClick={loadZodiacSign} disabled={isLoadButtonDisabled}>{isLoading ? 'fetching...' : 'Get zodiac sign'}</button>
        </div>

        <div className={styles.buttonContainer}>
          {zodiacSign && (
            <ZodiacSign label={zodiacSign.label} sign={zodiacSign.sign} icon={zodiacSign.icon} />
          )}
        </div>

        <div className={styles.error}>
          {error? <h2>Opps.. some error occured or Unable to get result. Try different combination</ h2> : null}
        </div>

        <div className={styles.grid}>
          <HeaderRow ingredients={ingredients} />
          {tableRows.map(({ id, label, groupedSandwiches }) => (
            <BodyRow key={id} label={label}>
              {groupedSandwiches.map(({ id, label, image }) => (
                <Content key={id} label={label} image={image} selectedLabels={sandwicheLabels} onClick={() => setSelectedSandwicheLabels(label)}/>
              ))}
            </BodyRow>
          ))}
        </div>
      </main>
    </div>
  )
}

