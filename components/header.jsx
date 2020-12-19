import styles from './header.module.css'


export default function Header(props) {
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.title}>Cristmas Lights</h1>
        </div>
    )
}