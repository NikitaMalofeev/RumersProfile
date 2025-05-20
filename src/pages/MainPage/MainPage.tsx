import { Profile } from 'widgets/Profile/ui/Profile';
import styles from './styles.module.scss';
import { Meets } from 'widgets/Meets/ui/Meets';
import WidgetsList from 'widgets/WidgetsList/WidgetsList';


const MainPage = () => {
    return (
        <div className={styles.page}>
            <Profile />
            <Meets />
            <WidgetsList />
        </div>
    );
};

export default MainPage