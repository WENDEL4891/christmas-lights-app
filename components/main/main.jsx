import styles from './main.module.css'

import ButtonPanel from './button-panel'
import LightContainer from './light-container'
// import LightContainerLabels from './light-container-labels'

export default function Main (props) {
    return (
        <div    id={styles.container}>
            <button>Start</button>
            <ButtonPanel title="Interval"></ButtonPanel>
            <ButtonPanel title="Intensity"></ButtonPanel>            
            {/* <LightContainerLabels></LightContainerLabels> */}
            <LightContainer></LightContainer>
        </div>
    )
}