import React from "react"
import { useSelector, useDispatch } from "react-redux"
import NewsCard from "./NewsCard"
import {
    toggleFormOn,
    toggleFormOff,
    toggleEditOn,
    toggleEditOff,
    toggleMinimizeForm,
    setNewsFormValue,
    fillNewsObjectById,
    resetNewsObjectState,
} from "../../store/slices/newsSlice"
import { setNotification } from "../../store/slices/notificationSlice"
import {
    updateNewsItem,
    deleteNewsItem,
    createNews,
    fetchData,
} from "../../shared/api"
import { setNewsArray } from "../../store/slices/newsSlice"

function News() {
    const newsState = useSelector((state) => state.news)
    const isLoggedIn = useSelector((state) => state.logIn.isLoggedIn)
    const dispatch = useDispatch()

    const addNewsArray = [...newsState.newsArray, newsState.newsObject]

    async function fetchNewsData() {
        try {
            const data = await fetchData()
            dispatch(setNewsArray(data))
        } catch (error) {
            console.error("Error fetching news:", error)
        }
    }

    const handleRemove = async (ID) => {
        try {
            const deletedItem = await deleteNewsItem(ID)
            dispatch(setNotification(deletedItem))
            fetchNewsData()
        } catch (error) {
            console.error(error)
        }
    }

    const handleEdit = (ID) => {
        dispatch(fillNewsObjectById(ID))
        dispatch(toggleEditOn())
        dispatch(toggleFormOn())
    }

    const handleClear = () => {
        dispatch(resetNewsObjectState())
    }

    const handleSave = async () => {
        try {
            const updatedItem = await updateNewsItem(
                newsState.newsObject._id,
                newsState.newsObject
            )
            dispatch(setNotification(updatedItem))
            fetchNewsData()
        } catch (error) {
            console.error(error)
        }
    }
    const handleAdd = async () => {
        const { title, message, priority } = newsState.newsObject

        if (!title || !message) {
            dispatch(setNotification("Fill in all the fields"))
            return
        }
        try {
            const createdItem = await createNews({
                title: title, message: message, priority: priority
            })
            dispatch(setNotification(createdItem))
            fetchNewsData()
        } catch (error) {
            console.error(error)
        }
    }

    const minimizeAddNewsForm = () => {
        dispatch(toggleMinimizeForm())
    }

    const newsFromOff = () => {
        dispatch(toggleFormOff())
        dispatch(toggleEditOff())
    }

    const newsFromOn = () => {
        dispatch(toggleFormOn())
    }

    const handleInputChange = (field, value) => {
        dispatch(setNewsFormValue({ field, value }))
    }

    return (
        <main className="news">
            {newsState.isFormOpen && (
                <div
                    className={`addNewsForm ${newsState.isFormMinimized ? "minimized" : ""
                        }`}
                >
                    <section className="tabBar">
                        <h1>{newsState.isEditMode ? "Edit News " : "Create News"}</h1>
                        <div>
                            <button className="minus" onClick={minimizeAddNewsForm}>
                                <svg viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" d="M16 12H8" />
                                        <circle cx="12" cy="12" r="10" />
                                    </g>
                                </svg>
                            </button>
                            <button className="exit" onClick={newsFromOff}>
                                <svg viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" d="M15 15L9 9m6 0l-6 6" />
                                        <circle cx="12" cy="12" r="10" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </section>
                    <section className="newsInputs">
                        <div>
                            <label htmlFor="#titleInput">Title</label>
                            <input
                                type="text"
                                id="titleInput"
                                value={newsState.newsObject.title}
                                onChange={(e) => handleInputChange("title", e.target.value)}
                                placeholder="Enter Title"
                            />
                            <label htmlFor="#messageInput">Message</label>
                            <textarea
                                type="text"
                                id="messageInput"
                                value={newsState.newsObject.message}
                                onChange={(e) => handleInputChange("message", e.target.value)}
                                placeholder="Enter Message"
                            />
                        </div>
                        <div>
                            <select
                                id="priorityInput"
                                value={newsState.newsObject.priority}
                                onChange={(e) => handleInputChange("priority", e.target.value)}
                            >
                                <option value="normal">Normal</option>
                                <option value="important">Important</option>
                                <option value="holiday">Holiday</option>
                            </select>
                        </div>
                    </section>
                    <section className="newsButtons">
                        {newsState.isEditMode ? (
                            <button className="save" onClick={handleSave}>
                                save
                            </button>
                        ) : (
                            <button className="add" onClick={handleAdd}>
                                add
                            </button>
                        )}
                        <button className="clear" onClick={handleClear}>
                            clear
                        </button>
                    </section>
                </div>
            )}

            {newsState.isFormMinimized && (
                <button className="maximiseNews" onClick={minimizeAddNewsForm}>
                    <svg viewBox="0 0 24 24">
                        <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        >
                            <path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962Z" />
                            <circle cx="12" cy="12" r="3" />
                        </g>
                    </svg>
                </button>
            )}

            {isLoggedIn ? (
                <button
                    className="addNews"
                    onClick={newsFromOn}
                    disabled={newsState.isFormOpen}
                >
                    <svg viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v6.7q-.475-.225-.975-.388T19 11.075V5H5v14h6.05q.075.55.238 1.05t.387.95H5Zm0-3v1V5v6.075V11v7Zm2-1h4.075q.075-.525.238-1.025t.362-.975H7v2Zm0-4h6.1q.8-.75 1.788-1.25T17 11.075V11H7v2Zm0-4h10V7H7v2Zm11 14q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23Zm-.5-2h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Z"
                        />
                    </svg>
                </button>
            ) : null}

            <ul>
                {newsState.isFormMinimized && addNewsArray.length > 0 ? (
                    addNewsArray.map((item, i) => (
                        <NewsCard
                            key={i}
                            priority={item.priority}
                            title={item.title}
                            message={item.message}
                            date={item.date}
                            handleRemove={() => handleRemove(item._id)}
                            handleEdit={() => handleEdit(item._id)}
                        />
                    ))
                ) : newsState.newsArray.length > 0 ? (
                    newsState.newsArray.map((item) => (
                        <NewsCard
                            key={item._id}
                            priority={item.priority}
                            title={item.title}
                            message={item.message}
                            date={item.date}
                            handleRemove={() => handleRemove(item._id)}
                            handleEdit={() => handleEdit(item._id)}
                        />
                    ))
                ) : (
                    <div className="noNews">
                        <h2>No news available</h2>
                        <svg
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    d="M2 11.083a4 4 0 0 1 1.706-3.277l6-4.2a4 4 0 0 1 4.588 0l6 4.2A4 4 0 0 1 22 11.083V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.917Z"
                                />
                                <path d="m2.5 9.5l7.001 5.501a4 4 0 0 0 4.998 0L21.5 9.5" />
                            </g>
                        </svg>
                    </div>
                )}
            </ul>
        </main>
    )
}

export default News
