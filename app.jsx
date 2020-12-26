import styles from './app.module.css'

import Head from 'next/head'

import Header from './components/layout/header'
// import Nav from './components/layout/nav'
import Main from './components/layout/main'
import Footer from './components/layout/footer'

export default function App() {
    return (
        <div className={styles.containerApp}>
            <Head>
                <title>Christmas lights</title>                
            </Head>
            <Header></Header>
            {/* <Nav></Nav> */}
            <Main></Main>
            <Footer></Footer>            
        </div>
    )
}