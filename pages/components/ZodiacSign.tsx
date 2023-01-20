import styles from '../../styles/Home.module.css'

type Props = {
  label: string;
  sign: string;
  icon: string;
}

export default function ZodiacSign({ label, sign, icon }: Props) {
  return (
    <div className={styles.zodiacSign}>
      <h2>{label}</h2>
      <p className={styles.description}>{sign}</p>
      <p className={styles.description}>{icon}</p>
    </div>
  );
}