import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './styles.module.scss';
import { Icon } from '../Icon/Icon';
import AccordeonArrow from 'shared/assets/svg/accordeonArrow.svg'

export interface AccordionRow {
    id: string;
    title: string;
    date: string;
}

export interface AccordionSection {
    id: string;
    label: string;
    dotColor: string;
    count: number;
    rows: AccordionRow[];
}

interface Props {
    sections: AccordionSection[];
}

export const Accordion: React.FC<Props> = ({ sections }) => {
    const [openIds, setOpenIds] = useState<string[]>([sections[0]?.id]);

    const toggle = (id: string) =>
        setOpenIds(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id],
        );

    /** анимация высоты */
    const variants = {
        collapsed: { height: 0, opacity: 0, overflow: 'hidden' },
        expanded: { height: 'auto', opacity: 1, overflow: 'visible' },
    };

    return (
        <div className={styles.accordion}>
            {sections.map(section => {
                const isOpen = openIds.includes(section.id);
                return (
                    <div key={section.id} className={styles.section}>
                        <button
                            className={styles.header}
                            onClick={() => toggle(section.id)}
                        >
                            <span
                                className={styles.statusDot}
                                style={{ background: section.dotColor }}
                            />
                            <span className={styles.headerTitle}>{section.label}</span>

                            <span className={styles.counter}>{section.count}</span>

                            <motion.span
                                className={styles.chevron}
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                <Icon Svg={AccordeonArrow} width={31} height={18} />
                            </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    key="content"
                                    initial="collapsed"
                                    animate="expanded"
                                    exit="collapsed"
                                    variants={variants}
                                    transition={{ duration: 0.25 }}
                                >
                                    {section.rows.map(row => (
                                        <div key={row.id} className={styles.row}>
                                            <div className={styles.rowAvatar} />
                                            <div className={styles.rowBody}>
                                                <span className={styles.rowTitle}>{row.title}</span>
                                            </div>

                                            <div className={styles.rowDots}>
                                                <span />
                                                <span />
                                                <span />
                                            </div>

                                            <span className={styles.rowDate}>{row.date}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};
