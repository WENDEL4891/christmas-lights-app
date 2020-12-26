import Image from 'next/image'

import stylesApp from '../../app.module.css'
import styles from './header.module.css'

export default function Header() {
    return (
        <div className={[stylesApp.gridItem, stylesApp.header, styles.headerContainer].join(' ')}>
            <div className={styles.title}>
                <h1 className={styles.titleText}>Christmas Lights</h1>
                <div className={styles.underlines}>
                    <hr className={styles.titleUnderLine1}/>
                    <hr className={styles.titleUnderLine2}/>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <div className={styles.imgBorder}>
                    <Image
                        src='/img/lights.jpg'
                        alt='lights'
                        width={150}
                        height={100}
                        className={styles.lightsImg}
                    ></Image>
                </div>
            </div>

        </div>
    )
}