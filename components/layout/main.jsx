import stylesApp from '../../app.module.css'
import styles from './main.module.css'

import LightsContainer from '../lightsContainer/lightsContainer'

export default function Main(props) {

    const lightsContainer = []
    for (let i = 0; i < Number(props.qtdPanels); i++) {
        lightsContainer.push(<LightsContainer key={i}/>)
    }

    return (
        <div className={[stylesApp.gridItem, stylesApp.main].join(' ')}>
            <div className={styles.mainContainer}>
                <div className={styles.mainContents}>                    
                    {lightsContainer}
                </div>
            </div>
        </div>
    )
}