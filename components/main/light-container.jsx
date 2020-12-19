import styles from './light-container.module.css'

import Light from './light'

let numbers = [1, 2, 3, 4, 5, 6, 7]


export default function LightContainer (props) {
    return (
        
        <div id={styles.containerMaior}>

            {/* <div id={styles.container}>
                <button type="button"                                
                                className="btn btn-secondary"
                                style={{
                                    flexRow: 1,
                                    height: "50px",
                                    flexBasis: "50px",
                                }}>Color</button>
                {numbers.map(number => {
                    return <button
                                type="button"
                                key={number}
                                className="btn btn-secondary glyphicon glyphicon-pencil"
                                style={{
                                    flexRow: 1,
                                    height: "50px",
                                    flexBasis: "50px",
                                }}>
                                
                            </button>
                })}            
            </div> */}

            <div id={styles.container}>                
                
                {/* <div style={{
                            background: '#000',
                            // borderRadius: '50%',
                            height: '50px',
                            flexBasis: '60px',
                        }}></div> */}
                
                {numbers.map(number => {                    
                    return <Light key={number}></Light>
                })}                        
            </div>

            {/* <div id={styles.container}>
            <button type="button"                                
                                className="btn btn-secondary"
                                style={{
                                    flexRow: 1,
                                    height: "50px",
                                    flexBasis: "50px",
                                }}>Size</button>
                {numbers.map(number => {
                    return <button
                                type="button"
                                key={number}
                                className="btn btn-secondary glyphicon glyphicon-pencil"
                                style={{
                                    flexRow: 1,
                                    height: "50px",
                                    flexBasis: "50px",
                                }}>
                                
                            </button>
                })}            
            </div> */}
            
        </div>

    )
}