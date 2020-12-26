import stylesApp from '../../app.module.css'

import NavItems from '../navItems'

export default function Nav() {
    return (
        <div className={[stylesApp.gridItem, stylesApp.nav].join(' ')}>
            <NavItems></NavItems>
        </div>
    )
}