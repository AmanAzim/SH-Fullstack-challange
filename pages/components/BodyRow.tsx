import { ReactNode } from 'react';
import styles from '../../styles/Home.module.css'

type Props = {
  label: string;
  children: ReactNode
}

export default function BodyRow({ label, children }: Props) {
  return (
    <div className={styles.tableHeader}>
      <div className={styles.firstRow}>
        <h2>{label}</h2>
      </div>
      {children}
    </div>
  )
}