import styles from '../../styles/Home.module.css'

type Props = {
  label: string;
  image: string;
  selectedLabels: string[];
  onClick: () => void;
}

export default function Content({ label, image, selectedLabels, onClick }: Props) {
  return (
    <div className={styles.tableContentRow}>
        <div className={`${styles.card} ${selectedLabels.includes(label) ? styles.selectedCard : ''}`} onClick={onClick}>
            <h2>{label}</h2>
            <img alt={label} src={image}/>
        </div>
    </div>
  );
}