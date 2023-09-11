import React from "react"
import { useSelector } from "react-redux"

function NewsCard(props) {
    const { priority, title, message, date, handleRemove, handleEdit } = props
    const newsState = useSelector((state) => state.news)
    const isLoggedIn = useSelector((state) => state.logIn.isLoggedIn)

    const iconsArray = [
        <svg viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M18 8.31c-.36-.41-.73-.82-1.12-1.21l-.29-.27l.14-.12a3.15 3.15 0 0 0 .9-3.49A3.91 3.91 0 0 0 14 1v2a2 2 0 0 1 1.76 1c.17.4 0 .84-.47 1.31c-.07.08-.15.13-.22.2c-3-2.41-6.29-3.77-7.9-2.16a2.16 2.16 0 0 0-.41.59v.1l-.18.53l-4.41 13.1A3.28 3.28 0 0 0 5.28 22a3.21 3.21 0 0 0 1-.17L20 17.28a1 1 0 0 0 .43-.31l.21-.18c1.43-1.44.51-4.21-1.41-6.9A6.63 6.63 0 0 1 23 9V7a8.44 8.44 0 0 0-5 1.31zM5.7 19.93a1.29 1.29 0 0 1-1.63-1.63l1.36-4.1a10.7 10.7 0 0 0 4.29 4.39zm7-2.33a8.87 8.87 0 0 1-6.3-6.29l1-3l.06.09c.11.22.25.45.39.68s.16.29.26.44s.33.48.51.73s.19.28.3.42s.43.55.66.82l.29.35c.34.39.7.77 1.08 1.16s.68.64 1 1l.33.28l.78.63l.37.28c.28.2.55.4.83.58l.31.2c.36.22.72.43 1.07.61h.05zm6.51-2.23h-.06c-.69.38-3.56-.57-6.79-3.81c-.34-.34-.66-.67-.95-1l-.29-.35l-.53-.64l-.29-.4c-.13-.19-.27-.37-.39-.55l-.26-.42l-.29-.47c-.08-.14-.14-.27-.21-.4s-.15-.26-.21-.4a3.31 3.31 0 0 1-.14-.36c-.05-.13-.11-.26-.15-.38S8.6 6 8.57 5.88s-.05-.22-.07-.32a2.26 2.26 0 0 1 0-.26a1 1 0 0 1 0-.24l.11-.31c.36-.36 2.23 0 4.73 1.9A4.13 4.13 0 0 1 12 7v2a6.45 6.45 0 0 0 3-.94l.48.46c.42.42.81.85 1.18 1.28a5.32 5.32 0 0 0-.6 3.4l2-.39a3.57 3.57 0 0 1 0-1.12a11.3 11.3 0 0 1 .81 1.45c.56 1.32.52 2.06.34 2.23z"
            />
        </svg>,
        <svg viewBox="0 0 24 24">
            <g fill="currentColor">
                <path d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5z" />
                <path d="M6 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8zm2 1v2h2V9H8zm6-1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zm-8 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z" />
            </g>
        </svg>,
        <svg viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" d="M12 7v6m0 3.5v.5" />
            </g>
        </svg>
    ]

    const getIcon = () => {
        if (priority === 'holiday') return iconsArray[0]
        else if (priority === 'important') return iconsArray[2]
        else return iconsArray[1]
    }

    function formatDate(inputDate) {
        if (!inputDate) {
            const currentDate = new Date()
            return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`
        }
        const date = new Date(inputDate)
        const day = date.getDate()
        const month = date.getMonth() + 1 // Months are 0-indexed, so add 1
        const year = date.getFullYear()

        // Pad single digits with leading zero
        const formattedDay = String(day).padStart(2, '0')
        const formattedMonth = String(month).padStart(2, '0')

        return `${formattedDay}/${formattedMonth}/${year}`
    }

    return (
        <li className={priority}>
            <div className="titleDiv">
                <section>
                    {getIcon()}
                    <h1>{title}</h1>
                </section>
                <p>{formatDate(date)}</p>
            </div>
            <p dangerouslySetInnerHTML={{ __html: message }}></p>

            {(!newsState.isFormMinimized && isLoggedIn) && (
                <div className="editToolsLi">
                    <button className="removeBtn" onClick={() => handleRemove()} disabled={newsState.isFormOpen}>
                        <svg viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM7 6v13V6Zm5 7.9l1.9 1.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l1.9-1.9Z"
                            />
                        </svg>
                    </button>
                    <button className="editBtn" onClick={() => handleEdit()} disabled={newsState.isFormOpen}>
                        <svg viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Zm-3.525-.725l-.7-.7l1.4 1.4l-.7-.7Z"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </li>
    )
}

export default NewsCard
