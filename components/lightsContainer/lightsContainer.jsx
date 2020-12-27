import SevenLights from './sevenLights'
import Nav from './nav'

import styles from './lightsContainer.module.css'

import { useState } from 'react'


export default function LightsContainer() {

    const [power, setPower] = useState(false)

    return (
        <div className={styles.navContainer}>
            <Nav setPower={setPower}></Nav>
            <SevenLights power={power}></SevenLights>
        </div>
    )
}