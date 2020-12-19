import styles from './light-container-labels.module.css'


export default function LightContainerLabels (props) {
    return (
        
        <div id={styles.containerMaior}>

            <div id={styles.container}>
                <button type="button" className="btn btn-warning">Color</button>
            </div>

            <div id={styles.container}>
                                                        
            </div>

            <div id={styles.container}>
            <button type="button" className="btn btn-warning">Color</button>
            </div>
            
        </div>

    )
}