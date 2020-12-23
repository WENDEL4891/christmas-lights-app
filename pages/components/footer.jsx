import stylesApp from '../app.module.css'

export default function Footer() {
    return (
        <div className={[stylesApp.gridItem, stylesApp.footer].join(' ')}>
            Footer
        </div>
    )
}