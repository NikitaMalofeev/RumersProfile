import React from 'react';
import { WidgetConfig } from './widgetsConfig';
import styles from './withWidgets.module.scss';
import { classNames } from '../helpers/classNames';

export const withWidgets =
    (widgets: WidgetConfig[]): React.FC =>
        () => (
            <div className={styles.container}>
                {widgets.map(({ id, Component, props, wrapperClassName }) => (
                    <div
                        key={id}
                        className={classNames(styles.widget, {}, [wrapperClassName])}
                    >
                        <Component {...props} />
                    </div>
                ))}
            </div>
        );
