// components/widgets/MenuListWidget/MenuListWidget.tsx
import React from 'react'
import styles from './styles.module.scss'
export interface MenuItem {
    id: string
    icon?: React.ReactNode
    text: string
    subtitle?: string
    arrow?: boolean
    bullet?: boolean
}
export const MenuListWidget: React.FC<{ items: MenuItem[] }> = ({ items }) => (
    <div className={styles.menu}>
        {items.map(i => (
            <button key={i.id} className={styles.item}>
                {i.bullet && <span className={styles.bullet} />}
                {i.icon && <span className={styles.icon}>{i.icon}</span>}
                <div className={styles.textBlock}>
                    <span className={styles.text}>{i.text}</span>
                    {i.subtitle && <span className={styles.subtitle}>{i.subtitle}</span>}
                </div>
                {i.arrow && <span className={styles.arrow}>▸</span>}
            </button>
        ))}
    </div>
)
