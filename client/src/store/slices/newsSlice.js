import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    newsObject:
    {
        _id: '',
        title: ``,
        message: ``,
        priority: `normal`,
        date: '',
    },
    newsArray: [],
    isFormOpen: false,
    isFormMinimized: false,
    isEditMode: false,
}

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        toggleFormOn: (state) => {
            state.isFormOpen = true
        },
        toggleFormOff: (state) => {
            state.isFormOpen = false
        },
        toggleMinimizeForm: (state) => {
            state.isFormMinimized = !state.isFormMinimized
        },
        toggleEditOn: (state) => {
            state.isEditMode = true
        },
        toggleEditOff: (state) => {
            state.isEditMode = false
        },
        setNewsFormValue: (state, action) => {
            const { field, value } = action.payload
            state.newsObject[field] = value
        },
        fillNewsObjectById: (state, action) => {
            const newsId = action.payload
            const foundNews = state.newsArray.find(news => news._id === newsId)

            if (foundNews) {
                state.newsObject = { ...foundNews }
            } else {
                state.newsObject = { ...initialState.newsObject }
            }
        },
        resetNewsObjectState: (state) => {
            if (state.isEditMode) {
                state.newsObject = {
                    _id: state.newsObject._id,
                    title: ``,
                    message: ``,
                    priority: ``,
                    date: '',
                }
            } else {
                state.newsObject = { ...initialState.newsObject }
            }
        },
        setNewsArray: (state, action) => {
            state.newsArray = [...action.payload]
        },
    },
})

export const {
    toggleFormOn,
    toggleFormOff,
    toggleEditOn,
    toggleEditOff,
    toggleMinimizeForm,
    setNewsFormValue,
    resetNewsObjectState,
    fillNewsObjectById,
    setNewsArray
} = newsSlice.actions

export default newsSlice.reducer
