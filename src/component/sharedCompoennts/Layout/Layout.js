import React from 'react'

import styles from './Layout.module.css'

export const Layout = ({className, children}) => {
    const classes = `${styles['layout-main']} ${className}`;

    return <div className={classes}>{children}</div>
}
