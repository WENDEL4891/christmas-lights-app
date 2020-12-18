import styles from './light-container.module.css'

import Light from './light'


export default function LightContainer (props) {
    return (
        <div id={styles.container}>
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