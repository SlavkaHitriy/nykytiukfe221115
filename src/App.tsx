import React, {FC, useEffect, useState} from 'react'

// Styles
import styles from './index.module.css'

// Components
import {Users} from './core/ui/Users'
import {setUsers} from './store/slices/usersSlice'
import {useDispatch} from 'react-redux'
import {IUser} from './models/User'
import {useAppSelector} from './hooks/redux'
import {Btn} from './core/ui/Btn'
import {User} from './core/ui/User'

export const App: FC = () => {
    const dispatch = useDispatch()
    const {users} = useAppSelector(state => state.users)

    const [user, setUser] = useState<IUser | undefined>()
    const [expendedView, setExpendedView] = useState(false)

    const handleClick = () => setUser(undefined)
    const handleViewAllClick = () => setExpendedView(true)

    useEffect(() => {
        (async () => {
            const res = await fetch('/initData.json')
            const data = await res.json()

            dispatch(setUsers([...data]))
        })()
    }, [dispatch])

    return (
        <div className={styles.app}>
            <div className={styles.appWrap}>
                {
                    user ? (
                        <User userInfo={user} closeUserInfo={handleClick}/>
                    ) : (<>
                        <Users users={users} setUser={setUser} expendedView={expendedView}/>
                        {
                            users.length > 3 && !expendedView && (
                                <div className={styles.appUsersBtnWrap}>
                                    <Btn className={styles.appUsersBtn} onClick={handleViewAllClick}>
                                        View all
                                    </Btn>
                                </div>
                            )
                        }
                    </>)
                }
            </div>
        </div>
    )
}
