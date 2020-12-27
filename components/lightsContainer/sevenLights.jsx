import styles from './sevenLights.module.css'


export default function SevenLights(props) {
    return (
        <div className={styles.sevenLightsContainer}>
            <div className={styles.light}></div>
            <div className={styles.light}></div>
            <div className={styles.light}></div>
            <div className={styles.light}></div>
            <div className={styles.light}></div>
            <div className={styles.light}></div>
            <div className={styles.light}></div>
            <div>{props.power ? 'true' : 'false'}</div>
        </div>
    )
}