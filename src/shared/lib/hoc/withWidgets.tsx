
import React from 'react'
import { WidgetConfig } from './widgetsConfig'
import styles from './withWidgets.module.scss'
export const withWidgets = (widgets: WidgetConfig[]): React.FC => () => (
    <div className={styles.container}>
        {widgets.map(w => (
            <>
                {w.id === 'desc' ? <>
                    <div>
                        <w.Component {...w.props} />
                    </div>
                </> : (
                    <div key={w.id} className={styles.widget}>
                        <w.Component {...w.props} />
                    </div>
                )}</>
        ))}
    </div>
)
