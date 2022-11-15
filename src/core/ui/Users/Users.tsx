import React, {Dispatch, FC, SetStateAction} from 'react'
import {IUser} from '../../../models/User'

// Styles
import styles from './index.module.css'
import {Btn} from '../Btn'

export type UsersProps = {
    setUser: Dispatch<SetStateAction<IUser | undefined>>
    users: IUser[],
    expendedView: boolean
}

export const Users: FC<UsersProps> = ({setUser, users, expendedView = false}) => {
    const handleClick = (user: IUser) => setUser(user)

    return (
        <div className={styles.users}>
            {
                users.length ? (<>
                    <ul className={styles.usersList}>
                        {
                            users.slice(0, expendedView ? users.length : 3).map(user => (
                                <li className={styles.usersItem} key={user.name}>
                                    <img className={styles.usersItemImg} src={`/images/${user.photo}`} alt='user'/>
                                    <div className={styles.usersItemContent}>
                                        {user.name}
                                        <span>{user.nickname}</span>
                                    </div>
                                    <Btn className={styles.usersItemBtn} onClick={() => handleClick(user)}>
                                        View
                                    </Btn>
                                </li>
                            ))
                        }
                    </ul>
                </>) : (
                    <div>
                        No users
                    </div>
                )
            }
        </div>
    )
}
