import React, {FC, MouseEventHandler} from 'react'

// Styles
import styles from './index.module.css'
import {IUser} from '../../../models/User'

type UserProps = {
    userInfo: IUser
    closeUserInfo: MouseEventHandler
}

export const User: FC<UserProps> = ({userInfo, closeUserInfo}) => {
    return (
        <div className={styles.user}>
            <button className={styles.userClose} type={'button'} onClick={closeUserInfo}/>
            <img className={styles.userPhoto} src={`/images/${userInfo.photo}`} alt='user'/>
            <div className={styles.userName}>
                {userInfo.name}
            </div>
            <div className={styles.userPosition}>
                {userInfo.position}
            </div>
            <div className={styles.userContent}>
                <div className={styles.userItem}>
                    <div className={styles.userItemName}>
                        Phone
                    </div>
                    <div className={styles.userItemValue}>
                        {userInfo.phone}
                    </div>
                </div>
                <div className={styles.userItem}>
                    <div className={styles.userItemName}>
                        URL
                    </div>
                    <div className={styles.userItemValue}>
                        <a href='https://example.com'>https://example.com</a>
                    </div>
                </div>
                <div className={styles.userItem}>
                    <div className={styles.userItemName}>
                        Email
                    </div>
                    <div className={styles.userItemValue}>
                        <a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
                    </div>
                </div>
                <button className={styles.userSend} type={'button'}>
                    Send message
                </button>
            </div>
        </div>
    )
}
