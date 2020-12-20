import styles from './light.module.css'
import { useState } from 'react'


export default function Light (props) {

    const editColorVisible = props.editColorVisible ? "" : styles.editColorNotVisible
    const editSizeVisible = props.editSizeVisible ? "" : styles.editSizeNotVisible

    // const [editColor, setEditColor] = useState([styles.light])

    // const [lightsOn, setLightsOn] = useState(styles.lightsOn)
    
    const setGreen = e => {
        console.log(editColor.push('bla'))
        
    }

    return (
        <div className={styles.lightContainer}>
            <div    className={[styles.light, editColorVisible].join(' ')}
                    onClick={() => setGreen()}
            ></div>
            <div className={[styles.light, props.on].join(' ')}></div>
            <div className={[styles.light, editSizeVisible].join(' ')}></div>
            {/* <div>{editColorVisible}</div> */}
        </div>
    )
}