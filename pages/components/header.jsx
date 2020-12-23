import Image from 'next/image'

import stylesApp from '../app.module.css'
import styles from './header.module.css'

export default function Header() {
    return (
        <div className={[stylesApp.gridItem, stylesApp.header, styles.headerContainer].join(' ')}>
            <h1 className={styles.title}>Header</h1>
            <div className={styles.imgLights}>
                <Image
                    src='/img/lights.jpg'
                    alt='lights'
                    width={150}
                    height={100}
                    style={{
                        bordeRadius: '10px',
                    }}
                ></Image>
            </div>

        </div>
    )
}