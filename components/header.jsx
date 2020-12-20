import styles from './header.module.css'

<<<<<<< HEAD
=======
import Image from 'next/image'

>>>>>>> recomecando/estilizandoComPositions_Relative_e_Fixed

export default function Header(props) {
    const heightImage = 150
    const widthImage = heightImage * 1.78
    return (
<<<<<<< HEAD
        <div id={styles.container}>
            <h1>Cristmas Lights</h1>
=======
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
>>>>>>> recomecando/estilizandoComPositions_Relative_e_Fixed
        </div>
    )
}