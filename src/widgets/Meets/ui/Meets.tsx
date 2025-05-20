
import { Accordion, AccordionSection } from 'shared/ui/Accordeon/Accordeon';
import styles from './styles.module.scss';

const mock: AccordionSection[] = [
    {
        id: 'calls',
        label: 'ЗОВЫ',
        dotColor: '#00CF00',
        count: 4,
        rows: [
            { id: 'c1', title: 'Название встречи полностью', date: '13.04' },
            { id: 'c2', title: 'Название встречи полностью', date: '16.04' },
            { id: 'c3', title: 'Название встречи полностью', date: '19.04' },
            { id: 'c4', title: 'Название встречи полностью', date: '21.04' },
        ],
    },
    {
        id: 'going',
        label: 'ИДУ',
        dotColor: '#FFA000',
        count: 3,
        rows: [
            { id: 'g1', title: 'Другая встреча', date: '05.05' },
            { id: 'g2', title: 'Другая встреча', date: '09.05' },
            { id: 'g3', title: 'Другая встреча', date: '12.05' },
        ],
    },
    {
        id: 'history',
        label: 'ИСТОРИЯ ВСТРЕЧ',
        dotColor: '#A7A7A7',
        count: 15,
        rows: [
            { id: 'h1', title: 'Старая встреча', date: '03.02' },
            { id: 'h2', title: 'Старая встреча', date: '11.01' },
        ],
    },
];

export const Meets = () => (
    <div className={styles.meets}>
        <Accordion sections={mock} />
    </div>
);
