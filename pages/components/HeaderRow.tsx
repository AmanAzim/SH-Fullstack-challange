import styles from '../../styles/Home.module.css'
import { ingredients } from "../../clients/mockDB";

type Props = {
  ingredients: typeof ingredients;
}

export default function HeaderRow({ ingredients }: Props) {
  return (
    <div className={styles.tableHeader}>
        <div className={styles.firstRow}/>
        {ingredients.map(({ id, label }) => (
        <div key={id} className={styles.tableHeaderRow}>
            <h2>{label}</h2>
        </div>
        ))}
    </div>
  )
}