import styles from './header.module.css'

import Image from 'next/image'


export default function Header(props) {
    const heightImage = 150
    const widthImage = heightImage * 1.78
    return (
        <div className={styles.headerContainer}>            
            <h1 className={styles.title}>Cristmas Lights</h1>
            <hr className={styles.horizontalRow}/>
            <div className={styles.imgContainer}>
                <Image
                    src='/christmas-lights.png'
                    alt='Christmas lights'
                    width={widthImage}
                    height={heightImage}
                    className={styles.lightsImg}
                ></Image>
            </div>
        </div>
    )
}