import styles from './nav.module.css'
import { useState } from 'react'


export default function NavItems(props) {

    const [intensityValue, setIntensityValue] = useState(1)
    const [sizeValue, setSizeValue] = useState(1)
    const [colorValue, setColorValue] = useState('#ffff00')
    

    const handleStartButton = e => {
        e.preventDefault()
        e.target.innerHTML = e.target.innerHTML == 'Start' ? 'Stop' : 'Start'
        props.setPower(e.target.innerHTML == 'Start' ? false : true)
    }
    
    const handleInputIntensity = e => {
        const value = e.target.value
        setIntensityValue(value)
    }
    
    const handleInputSize = e => {
        setSizeValue(e.target.value)
    }

    const handleInputColor = e => {
        setColorValue(e.target.value)
    }

    return (
        <div className={styles.navItemsContainer}>
            <form action="" className={styles.form}>
                <button className={styles.btnStart} onClick={handleStartButton}>Start</button>
                <fieldset className={styles.inputsAndLabels}>
                    <legend className={styles.controlsLegend}>Controls</legend>
                    <div>
                        <label htmlFor="intensity" className={styles.labels}>Intensity</label>
                        <input className={[styles.inputNumber].join(' ')} type="number" name="" id="intensity" value={intensityValue} onChange={handleInputIntensity}/>
                    </div>
                    <div>
                        <label htmlFor="size" className={styles.labels}>Size</label>
                        <input className={[styles.inputNumber].join(' ')} type="number" name="" id="size" value={sizeValue} onChange={handleInputSize}/>
                    </div>
                    <div>
                        <label htmlFor="color" className={styles.labels} >Color</label>
                        <input type="color" name="" id="color" value={colorValue} className={styles.inputColor} onChange={handleInputColor}/>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

