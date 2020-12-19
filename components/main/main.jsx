import styles from './main.module.css'

import ButtonPanel from './button-panel'
import LightContainer from './light-container'

export default function Main (props) {
    return (
        <div    id={styles.container}>
            <button>Start</button>
            <ButtonPanel title="Interval"></ButtonPanel>
            <ButtonPanel title="Intensity"></ButtonPanel>            
            <LightContainer></LightContainer>            
        </div>
    )
}