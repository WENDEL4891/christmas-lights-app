import styles from './app.module.css'

import Head from 'next/head'

import Header from './components/header'
import Nav from './components/nav'
import Main from './components/main'
import Footer from './components/footer'

export default function App() {
    return (
        <div className={styles.containerApp}>
            <Head>
                <title>Christmas lights</title>                
            </Head>
            <Header></Header>
            <Nav></Nav>
            <Main></Main>
            <Footer></Footer>            
        </div>
    )
}