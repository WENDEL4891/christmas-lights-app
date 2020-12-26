import styles from './nav.module.css'
import { useState } from 'react'


export default function NavItems() {

    const [intensityValue, setIntensityValue] = useState(1)
    const [sizeValue, setSizeValue] = useState(1)

    const handleInputIntensity = e => {
        const value = e.target.value
        setIntensityValue(value)
    }
    
    const handleInputSize = e => {
        setSizeValue(e.target.value)
    }

    return (
        <div className={styles.navItemsContainer}>
            <form action="" className={styles.form}>
                <button className={styles.btnStart}>Start</button>
                <fieldset className={styles.inputsAndLabels}>
                    <legend className={styles.controlsLegend}>Controls</legend>
                    <div>
                        <label htmlFor="intensity" className={styles.labels}>Intensity</label>
                        <input className={[styles.input].join(' ')} type="number" name="" id="intensity" value={intensityValue} onChange={handleInputIntensity}/>
                    </div>
                    <div>
                        <label htmlFor="size" className={styles.labels}>Size</label>
                        <input className={[styles.input].join(' ')} type="number" name="" id="size" value={sizeValue} onChange={handleInputSize}/>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

