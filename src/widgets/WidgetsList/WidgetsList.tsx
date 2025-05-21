import React from 'react'
import SubscribeIcon from 'shared/assets/svg/widgetsSubscribe.svg'
import BookmarkIcon from 'shared/assets/svg/widgetsBookmark.svg'
import AdultIcon from 'shared/assets/svg/widgetsAdult.svg'
import BlackListIcon from 'shared/assets/svg/widgetsBlackList.svg'
import EyeIcon from 'shared/assets/svg/widgetsEye.svg'
import LogoutIcon from 'shared/assets/svg/widgetsLogout.svg'
import { WidgetConfig } from 'shared/lib/hoc/widgetsConfig'
import { withWidgets } from 'shared/lib/hoc/withWidgets'
import { MenuListWidget } from 'features/MenuListWidgets/MenuListWidgets'
import { Icon } from 'shared/ui/Icon/Icon'
import styles from './styles.module.scss'

const actionsItems: any[] = [
    { id: 'public', icon: <Icon Svg={EyeIcon} width={35} height={21} />, text: 'Публичный аккаунт' },
    { id: 'adult', icon: <Icon Svg={AdultIcon} width={35} height={21} />, text: 'Взрослый' },
]

const subsItems: any[] = [
    { id: 'subs', icon: <Icon Svg={SubscribeIcon} width={35} height={21} />, text: 'Мои подписки' },
    { id: 'black', icon: <Icon Svg={BlackListIcon} width={35} height={21} />, text: 'Черный список' },
    { id: 'book', icon: <Icon Svg={BookmarkIcon} width={35} height={21} />, text: 'Закладки' },
]

const descItems: any[] = [
    {
        id: 'desc',
        text: 'я профессиональный скуф, обажаю сидеть дома и часто играю в Мафию…',
    },
    { id: 'tg', text: 'Мой телеграм', subtitle: '@ribakit3' },
]


const linkItems: any[] = [
    { id: 'l1', bullet: true, text: 'Возможности ИГРУМА' },
    { id: 'l2', bullet: true, text: 'Правила ИГРУМА' },
    { id: 'l3', bullet: true, text: 'Инструкция РУМЕРА' },
    { id: 'l4', bullet: true, text: 'Инструкция МАСТЕРА' },
    { id: 'l5', bullet: true, text: 'Инструкция МЕСТА' },
    { id: 'l6', bullet: true, text: 'Пользовательское соглашение' },
]

const logoutItems: any[] = [
    { id: 'out', icon: <Icon Svg={LogoutIcon} width={35} height={21} />, text: 'Выйти из профиля' },
]

const widgets: WidgetConfig[] = [
    { id: 'actions', Component: MenuListWidget, props: { items: actionsItems } },
    { id: 'subs', Component: MenuListWidget, props: { items: subsItems } },
    { id: 'desc', Component: MenuListWidget, props: { items: descItems }, wrapperClassName: styles.widgetDesc, },
    { id: 'links', Component: MenuListWidget, props: { items: linkItems } },
    { id: 'logout', Component: MenuListWidget, props: { items: logoutItems } },
]

export default withWidgets(widgets)
