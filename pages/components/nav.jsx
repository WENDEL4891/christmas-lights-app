import stylesApp from '../app.module.css'

export default function Nav() {
    return (
        <div className={[stylesApp.gridItem, stylesApp.nav].join(' ')}>
            Nav
        </div>
    )
}