import { Profile } from 'widgets/Profile/ui/Profile';
import styles from './styles.module.scss';


const MainPage = () => {
    return (
        <div className={styles.MainPage}>
            <Profile />
        </div>
    );
};

export default MainPage