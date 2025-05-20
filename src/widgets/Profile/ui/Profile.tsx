import { Icon } from '../../../shared/ui/Icon/Icon';
import styles from './styles.module.scss';

import BackIcon from 'shared/assets/svg/backIcon.svg'
import ProfileCotum from 'shared/assets/svg/profileCotum.svg'
import ProfileEye from 'shared/assets/svg/profileEye.svg'
import ProfileExport from 'shared/assets/svg/profileExport.svg'
import ProfileAvatar from 'shared/assets/images/profileAvatar.png'

const ProfileActions = [
    {
        id: 'export',
        action: () => { },
        Icon: ProfileCotum,
        description: ''
    },
    {
        id: 'eye',
        action: () => { },
        Icon: ProfileEye,
        description: 'Это я'
    },
    {
        id: 'cotum',
        action: () => { },
        Icon: ProfileExport,
        description: 'Котум'
    },
]


export const Profile = () => {
    return (
        <div className={styles.profile}>
            <Icon Svg={BackIcon} width={16} height={31} />
            <div className={styles.avatar}>
                <div className={styles.avatar__name}>

                </div>
                <img src={ProfileAvatar} alt="" className={styles.avatar__image} />
            </div>
            <aside className={styles.profile__actions}>
                {ProfileActions.map((item) => (
                    <button onClick={item.action} key={item.id}>
                        <Icon Svg={item.Icon} width={16} height={31} />
                        <span>{item.description}</span>
                    </button>
                ))}
            </aside>
        </div>
    );
};