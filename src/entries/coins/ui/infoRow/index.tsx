import styles from './infoRow.module.css'

type Props = {
  label: string
  value: string | JSX.Element
}

export const InfoRow = ({ label, value }: Props) => {
  return (
    <div className={styles.info_row}>
      <p className={styles.info_label}>{label}</p>

      {typeof value == 'string' ? <p>{value}</p> : value}
    </div>
  )
}
