import styles from './button-panel.module.css'


export default function ButtonPanel (props) {
    return (
<<<<<<< HEAD
        <div style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center"
        }}>
            <h5>{props.title}</h5>
            <button>+</button>
            <button>-</button>
=======
        <div className={styles.buttonPanelContainer}>
            <h5 className={styles.title}>{props.title}</h5>
            <div className={styles.buttonsContainer}>                
                <button type='button' className={`${styles.buttonController} ${styles.buttonControllerLeft}`}>-</button>
                <button type='button' className={`${styles.buttonController} ${styles.buttonControllerRight}`}>+</button>
            </div>
>>>>>>> recomecando/estilizandoComPositions_Relative_e_Fixed
        </div>
    )
}