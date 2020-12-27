import stylesApp from '../../app.module.css'
import styles from './navLayout.module.css'

import { useState } from 'react'

// import NavItems from '../navItems'

export default function NavLayout(props) {

    const [valueInput, setValueInput] = useState(1)
    const [msg, setMsg] = useState('')
    const [classMsg, setClassMsg] = useState(styles.display_none)


    const handleInput = e => {
        const insertedValue = e.target.value
        
        const validInputs = ['1', '2', '3', '4', '5', '6', '7', '']

        if (validInputs.indexOf(insertedValue) < 0) {
            setMsg('Escolha um número de 1 a 7.')
            setClassMsg(styles.error)
        } else {
            setValueInput(insertedValue)
            setMsg('')
            setClassMsg(styles.display_none)            
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = document.getElementById('qtdPaineis').value
        if (inputValue == ''){
            setMsg('Escolha um número de 1 a 7.')
            setClassMsg(styles.error)
        } else {
            props.setQtdPanels(inputValue)
        }
        
    }

    return (
        <div className={[stylesApp.gridItem, stylesApp.navLayout].join(' ')}>
            <div className={[styles.navLayoutContainer].join(' ')}>
                <form action="" className={styles.form}>
                    <label htmlFor="qtdPaineis">Number of Panels</label>
                    <input type="number" name="" id="qtdPaineis" className={styles.qtdPaineis} onChange={handleInput} value={valueInput}/>
                    <div className={classMsg}>{msg}</div>
                    <button type='submit' className={styles.submit} onClick={handleSubmit}>Generate</button>
                </form>
            </div>
        </div>
    )
}