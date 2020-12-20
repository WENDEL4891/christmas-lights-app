import styles from './footer.module.css'


export default function Footer (props) {
    return (
        <div className={styles.footerContainer}>
            <span className={styles.footerText}>Written by <b className={styles.wendel}>Wendel</b></span>
        </div>
    )
}