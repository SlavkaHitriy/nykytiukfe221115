import React, {FC, MouseEventHandler, ReactElement, ReactNode} from 'react'

// Styles
import styles from './index.module.css'

type BtnProps = {
    className: string
    onClick: MouseEventHandler
    children?: ReactElement | ReactNode
}

export const Btn: FC<BtnProps> = ({className, onClick, children}) => {
    return (
        <button
            className={`${styles.btn} ${className}`}
            type={'button'}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
