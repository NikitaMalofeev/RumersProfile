import React, { ButtonHTMLAttributes, memo, ReactNode, useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { classNames, Mods } from 'shared/lib/helpers/classNames/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    square?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    theme?: ButtonTheme;
    buttonForm?: ButtonForm;
    onClick?: () => void;
    padding?: string;
}

export enum ButtonForm {
    CIRCLE = 'circle',
}

export enum ButtonTheme {
    BLUE = "blue",
    EMPTYBLUE = 'emptyblue',
    GREEN = "green",
    UNDERLINE = "underline",
    GREENuNDERLINE = 'green__underline'
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.BLUE,
        buttonForm = ButtonForm.CIRCLE,
        square = false,
        disabled = false,
        padding,
        onClick,
        ...otherProps
    } = props;

    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPressed) {
            timer = setTimeout(() => setIsPressed(false), 75);
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isPressed]);

    const handleClick = () => {
        setIsPressed(true);
        if (onClick) {
            onClick();
        }
    };

    const mods: Mods = {
        [styles[theme]]: true,
        [styles[buttonForm]]: true,
        [styles.pressed]: isPressed,
    };

    const buttonClasses = [
        styles.Button,
        styles.background,
        styles.size_m,
        styles.partial_bordered,
        className,
        square ? styles.square : '',
        disabled ? styles.disabled : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            type="button"
            className={classNames(styles.Button, mods, [className, buttonClasses])}
            disabled={disabled}
            style={{ padding: `${padding}` }}
            {...otherProps}
            onClick={handleClick}
        >
            {children}
        </button>
    );
});
