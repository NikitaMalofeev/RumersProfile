import { useEffect } from 'react';
import { useSelector } from 'react-redux';


import { Icon } from '../../../shared/ui/Icon/Icon';
import styles from './styles.module.scss';

import BackIcon from 'shared/assets/svg/backIcon.svg';
import ProfileCotum from 'shared/assets/svg/profileCotum.svg';
import ProfileEye from 'shared/assets/svg/profileEye.svg';
import ProfileExport from 'shared/assets/svg/profileExport.svg';
import ProfileAvatar from 'shared/assets/images/profileAvatar.png';
import SettingsIcon from 'shared/assets/svg/settings.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { fetchProfileThunk } from 'entities/rumers/slice/rumersSlice';
import { RootState } from 'app/providers/store';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const ProfileActions = [
    {
        id: 'export',
        action: () => { },
        Icon: ProfileExport,
        iconSize: { width: 27, height: 41 },
    },
    {
        id: 'eye',
        action: () => { },
        Icon: ProfileEye,
        iconSize: { width: 36, height: 20 },
        description: 'Это я',
    },
    {
        id: 'cotum',
        action: () => { },
        Icon: ProfileCotum,
        iconSize: { width: 30, height: 30 },
        description: 'Котум',
    },
];

export const Profile = () => {
    const dispatch = useAppDispatch();
    const { profile } = useSelector((state: RootState) => state.profile);

    useEffect(() => {
        if (!profile) dispatch(fetchProfileThunk('damirdamir'));
    }, []);

    const defaultData = {
        avatar: ProfileAvatar,
        name: 'Ваня Петькин',
        nickname: '@nickname',
        lastVisit: 'Вчера 18.00',
        period: '1 месяц',
        meetings: '15',
        rumors: '350',
        city: 'Краснодар',
    };

    const page = profile?.page;
    const nickname = page?.middle?.[0]?.group?.[0]?.label?.text ?? defaultData.nickname;
    const lastVisit = page?.middle?.[0]?.group?.[1]?.label?.text ?? defaultData.lastVisit;
    const period = page?.middle?.[1]?.group?.[0]?.label?.text ?? defaultData.period;
    const meetings = page?.middle?.[1]?.group?.[1]?.label?.text ?? defaultData.meetings;
    const rumors = page?.middle?.[1]?.group?.[2]?.label?.text ?? defaultData.rumors;
    const name = page?.title?.trim() || defaultData.name;
    const avatar = page?.image || defaultData.avatar;
    const city = page?.middle?.[2]?.group?.[0]?.label?.text?.trim() || defaultData.city;

    return (
        <div className={styles.profile}>
            <div className={styles.profile__profile}>
                <Icon Svg={BackIcon} width={16} height={31} />
                <div className={styles.avatar}>
                    <div className={styles.avatar__name}>{name[0]}</div>
                    <img src={avatar} alt="" className={styles.avatar__image} />
                </div>

                <aside className={styles.profile__actions}>
                    {ProfileActions.map((item) => (
                        <button
                            onClick={item.action}
                            key={item.id}
                            className={styles.profile__actions__button}
                        >
                            <Icon
                                Svg={item.Icon}
                                width={item.iconSize.width}
                                height={item.iconSize.height}
                            />
                            <span className={styles.profile__actions__description}>
                                {item.description}
                            </span>
                        </button>
                    ))}
                </aside>
            </div>

            <div className={styles.profile__stats}>
                <span className={styles.profile__stats__name}>
                    румер:<b className={styles.profile__stats__name__bold}>{name}</b>
                </span>

                <div className={styles.stats__info}>
                    <span>{nickname}</span>
                    <span>{lastVisit}</span>
                </div>

                <div className={styles.stats__stats}>
                    <div className={styles.stats__container}>
                        <span>{period}</span>
                        <span>в игруме</span>
                    </div>
                    <div className={styles.stats__container}>
                        <span>{meetings}</span>
                        <span>встреч</span>
                    </div>
                    <div className={styles.stats__container}>
                        <span>{rumors}</span>
                        <span>румеров</span>
                    </div>
                </div>
            </div>

            <div className={styles.profile__additional}>
                <Button padding="5px 13px" children={city} />
                <Button
                    theme={ButtonTheme.BORDER}
                    padding="5px 13px"
                    children={
                        <>
                            <Icon Svg={SettingsIcon} width={30} height={30} />
                            <span>Редакт</span>
                        </>
                    }
                />
            </div>
        </div>
    );
};
