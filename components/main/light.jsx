import styles from './light.module.css'


export default function Light (props) {
    return (
        <div className={styles.lightContainer}>
            <div className={styles.light}></div>
            <div className={styles.light}></div>
            <div className={styles.light}></div>
        </div>
    )
}