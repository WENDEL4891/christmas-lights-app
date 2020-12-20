import styles from './light-container.module.css'

import Light from './light'

let numbers = [1, 2, 3, 4, 5, 6, 7]


export default function LightContainer (props) {
    return (
<<<<<<< HEAD
        
        <div id={styles.containerMaior}>

            <div id={styles.container}>
                {numbers.map(number => {
                    return <button
                                type="button"
                                key={number}
                                className="btn btn-secondary glyphicon glyphicon-pencil"
                                style={{flexRow: 1}}>
                                
                            </button>
                })}            
            </div>

            <div id={styles.container}>                
                {numbers.map(number => {
                    return <Light key={number}></Light>
                })}                        
            </div>

            <div id={styles.container}>
                {numbers.map(number => {
                    return <button
                                type="button"
                                key={number}
                                className="btn btn-secondary glyphicon glyphicon-pencil"
                                style={{flexRow: 1}}>
                                
                            </button>
                })}            
            </div>
            
=======
        <div className={styles.lightsContainer}>
            <Light></Light>
            <Light></Light>
            <Light></Light>
            <Light></Light>
            <Light></Light>
            <Light></Light>
            <Light></Light>
>>>>>>> recomecando/estilizandoComPositions_Relative_e_Fixed
        </div>

    )
}