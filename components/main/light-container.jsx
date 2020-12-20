import styles from './light-container.module.css'
import { useState } from 'react'

import Light from './light'

let numbers = [1, 2, 3, 4, 5, 6, 7]


export default function LightContainer (props) {

    const [editColorVisible, setEditColorVisible] = useState(false)
    const [editSizeVisible, setEditSizeVisible] = useState(false)
       
    const showEditColors = e => {
        e.target.innerHTML = e.target.innerHTML === 'Color' ? 'Hide' : 'Color'
        setEditColorVisible(
            e.target.innerHTML === 'Color' ? false : true
        )        
    }

    const showEditSizes = e => {
        e.target.innerHTML = e.target.innerHTML === 'Size' ? 'Hide' : 'Size'
        setEditSizeVisible(
            e.target.innerHTML === 'Size' ? false : true
        )
    }

    return (
        <div className={styles.lightsContainer}>
                <div className={styles.lightsLabel}>
                    <button className={[styles.btn, styles.btnEditColor].join(' ')}
                            onClick={e=>showEditColors(e)}
                    >Color</button>
                    
                    <div className={styles.space}></div>
                            
                    <button className={[styles.btn, styles.btnEditSize].join(' ')}
                            onClick={e=>showEditSizes(e)}
                    >Size</button>
                </div>
                <div>
                    <Light on={true} editColorVisible={editColorVisible} editSizeVisible={editSizeVisible}></Light>
                    <Light on={true} editColorVisible={editColorVisible} editSizeVisible={editSizeVisible}></Light>
                    <Light on={true} editColorVisible={editColorVisible} editSizeVisible={editSizeVisible}></Light>
                    <Light on={true} editColorVisible={editColorVisible} editSizeVisible={editSizeVisible}></Light>
                    <Light on={true} editColorVisible={editColorVisible} editSizeVisible={editSizeVisible}></Light>
                    <Light on={true} editColorVisible={editColorVisible} editSizeVisible={editSizeVisible}></Light>
                    <Light on={true} editColorVisible={editColorVisible} editSizeVisible={editSizeVisible}></Light>            
                </div>
        </div>

    )
}