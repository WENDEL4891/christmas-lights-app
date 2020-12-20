import styles from './main.module.css'

import ButtonPanel from './button-panel'
import LightContainer from './light-container'

export default function Main (props) {
    return (
        <div className={styles.mainContainer}>
            <button type='button' className={styles.startButton} >Start</button>
            <div className={styles.buttonsPanelContainer}>
                <ButtonPanel title="Interval"></ButtonPanel>
                <ButtonPanel title="Intensity"></ButtonPanel>
            </div>
            <LightContainer></LightContainer>
        </div>
    )
}