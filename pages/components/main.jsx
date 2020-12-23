import stylesApp from '../app.module.css'

export default function Main() {
    return (
        <div className={[stylesApp.gridItem, stylesApp.main].join(' ')}>
            Main
        </div>
    )
}