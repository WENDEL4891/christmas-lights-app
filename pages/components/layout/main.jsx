import stylesApp from '../../app.module.css'
import styles from './main.module.css'

import LightsContainer from '../lightsContainer/lightsContainer'

export default function Main() {
    return (
        <div className={[stylesApp.gridItem, stylesApp.main].join(' ')}>
            <div className={styles.mainContainer}>
                <div className={styles.mainContents}>
                    <LightsContainer></LightsContainer>
                    <LightsContainer></LightsContainer>
                    <LightsContainer></LightsContainer>
                    <LightsContainer></LightsContainer>
                    <LightsContainer></LightsContainer>
                    <LightsContainer></LightsContainer>
                    <LightsContainer></LightsContainer>
                </div>
            </div>
        </div>
    )
}