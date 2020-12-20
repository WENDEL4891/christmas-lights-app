import styles from './light-container.module.css'

import Light from './light'

let numbers = [1, 2, 3, 4, 5, 6, 7]


export default function LightContainer (props) {
    return (
        <div className={styles.lightsContainer}>
            <Light></Light>
            <Light></Light>
            <Light></Light>
            <Light></Light>
            <Light></Light>
            <Light></Light>
            <Light></Light>
        </div>

    )
}