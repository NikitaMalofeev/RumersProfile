import { Profile } from 'widgets/Profile/ui/Profile';
import styles from './styles.module.scss';
import { Meets } from 'widgets/Meets/ui/Meets';
import WidgetsList from 'widgets/WidgetsList/WidgetsList';

import ArrowRight from 'shared/assets/svg/arrowRight.svg'
import { Icon } from 'shared/ui/Icon/Icon';


const MainPage = () => {
    return (
        <div className={styles.page}>
            <Profile />
            <Meets />
            <div className={styles.page__create}>
                <div className={styles.page__create__top}><span>Создать игрум</span></div>
                <div className={styles.page__create__bottom}><span>Мои игрумы</span> <Icon Svg={ArrowRight} width={18} height={31} className={styles.page__create__icon} /></div>
            </div>
            <WidgetsList />
        </div>
    );
};

export default MainPage