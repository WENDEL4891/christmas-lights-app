import styles from './button-panel.module.css'


export default function ButtonPanel (props) {
    return (
        <div className={styles.buttonPanelContainer}>
            <h5 className={styles.title}>{props.title}</h5>
            <div className={styles.buttonsContainer}>                
                <button type='button' className={`${styles.buttonController} ${styles.buttonControllerLeft}`}>-</button>
                <button type='button' className={`${styles.buttonController} ${styles.buttonControllerRight}`}>+</button>
            </div>
        </div>
    )
}