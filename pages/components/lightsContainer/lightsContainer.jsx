import SevenLights from './sevenLights'
import Nav from './nav'

import styles from './lightsContainer.module.css'


export default function LightsContainer() {
    return (
        <div className={styles.navContainer}>
            <Nav></Nav>
            <SevenLights></SevenLights>
        </div>
    )
}