import styles from './app.module.css'

import Head from 'next/head'

import Header from './components/layout/header'
import NavLayout from './components/layout/navLayout'
import Main from './components/layout/main'
import Footer from './components/layout/footer'
import { useState } from 'react'

export default function App() {

    const [qtdPanels, setQtdPanels] = useState(1)

    return (
        <div className={styles.containerApp}>
            <Head>
                <title>Christmas lights</title>                
            </Head>
            <Header></Header>            
            <NavLayout setQtdPanels={setQtdPanels}></NavLayout>
            <Main qtdPanels={qtdPanels}></Main>
            <Footer></Footer>            
        </div>
    )
}