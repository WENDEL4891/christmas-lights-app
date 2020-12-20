import Head from 'next/head'

import styles from './app.module.css'

import Header from './components/header'
import Main from './components/main/main'
import Footer from './components/footer'

export default function App (props) {
    return (
        <div>
            <Head>
                <title>Christmas Lights</title>
            </Head>            
            <Header></Header>                        
            <Main></Main>
            <Footer></Footer>          
        </div>
    )
}