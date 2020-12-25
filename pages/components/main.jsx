import stylesApp from '../app.module.css'
import style from './main.module.css'

export default function Main() {
    return (
        <div className={[stylesApp.gridItem, stylesApp.main].join(' ')}>
            <div className={style.mainContainer}>
                <div className={[style.mainItems].join(' ')}>teste</div>
                <div className={[style.mainItems].join(' ')}>teste</div>
                <div className={[style.mainItems].join(' ')}>teste</div>
                <div className={[style.mainItems].join(' ')}>teste</div>
                <div className={[style.mainItems].join(' ')}>teste</div>
                <div className={[style.mainItems].join(' ')}>teste</div>
                <div className={[style.mainItems].join(' ')}>teste</div>
                <div className={[style.mainItems].join(' ')}>teste</div>
                <div className={[style.mainItems].join(' ')}>teste</div>
                <div className={[style.mainItems].join(' ')}>teste</div>
                <div className={[style.mainItems].join(' ')}>teste</div>
            </div>
        </div>
    )
}