import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearNotification } from '../../store/slices/notificationSlice'

export default function Notification() {
    const content = useSelector((state) => state.notification.content)
    const show = useSelector((state) => state.notification.show)
    const uniqueId = useSelector((state) => state.notification.uniqueId)
    const dispatch = useDispatch()

    useEffect(() => {
        if (content !== '') {
            const timer = setTimeout(() => {
                dispatch(clearNotification())
            }, 3000)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [content, uniqueId])

    return (
        <div className={`notification ${show ? 'show-notification' : ''}`}>
            <h2>{content}</h2>
        </div>
    )
}