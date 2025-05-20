import { Icon } from '../../../shared/ui/Icon/Icon';
import styles from './styles.module.scss';

import BackIcon from 'shared/assets/svg/backIcon.svg'
import ProfileCotum from 'shared/assets/svg/profileCotum.svg'
import ProfileEye from 'shared/assets/svg/profileEye.svg'
import ProfileExport from 'shared/assets/svg/profileExport.svg'
import ProfileAvatar from 'shared/assets/images/profileAvatar.png'
import SettingsIcon from 'shared/assets/svg/settings.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

const ProfileActions = [


    {
        id: 'export',
        action: () => { },
        Icon: ProfileExport,
        iconSize: {
            width: 27,
            height: 41
        },

    },
    {
        id: 'eye',
        action: () => { },
        Icon: ProfileEye,
        iconSize: {
            width: 36,
            height: 20
        },
        description: 'Это я'
    },
    {
        id: 'cotum',
        action: () => { },
        Icon: ProfileCotum,
        iconSize: {
            width: 30,
            height: 30
        },
        description: 'Котум'

    },
]


export const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__profile}>
                <Icon Svg={BackIcon} width={16} height={31} />
                <div className={styles.avatar}>
                    <div className={styles.avatar__name}>
                        Р
                    </div>
                    <img src={ProfileAvatar} alt="" className={styles.avatar__image} />
                </div>
                <aside className={styles.profile__actions}>
                    {ProfileActions.map((item) => (
                        <button onClick={item.action} key={item.id} className={styles.profile__actions__button}>
                            <Icon Svg={item.Icon} width={item.iconSize.width} height={item.iconSize.height} />
                            <span className={styles.profile__actions__description}>{item.description}</span>
                        </button>
                    ))}
                </aside>

            </div>
            <div className={styles.profile__stats}>
                <span className={styles.profile__stats__name}>румер:<b className={styles.profile__stats__name__bold}>Ваня Петькин</b></span>
                <div className={styles.stats__info}>
                    <span>@nickname</span>
                    <span>Вчера 18.00</span>
                </div>
                <div className={styles.stats__stats}>
                    <div className={styles.stats__container}>
                        <span>1 месяц</span>
                        <span>в игруме</span>
                    </div>
                    <div className={styles.stats__container}>
                        <span>15</span>
                        <span>встреч</span>
                    </div>
                    <div className={styles.stats__container}>
                        <span>350</span>
                        <span>румеров</span>
                    </div>
                </div>
            </div>
            <div className={styles.profile__additional}>
                <Button children='Краснодар' padding='5px 13px' />
                <Button theme={ButtonTheme.BORDER} padding='5px 13px' children={
                    <>
                        <Icon Svg={SettingsIcon} width={30} height={30} />
                        <span>Редакт</span>
                    </>
                } />
            </div>
        </div>
    );
};