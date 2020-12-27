import stylesApp from '../../app.module.css'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={[stylesApp.gridItem, stylesApp.footer, styles.footerContainer].join(' ')}>
            Written by &nbsp; <strong className={styles.name}>Wendel</strong>
        </div>
    )
}