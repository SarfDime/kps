export async function fetchData(endpoint) {
    const response = await fetch(endpoint)
    const data = await response.json()
    return data
}

export async function checkLogin() {
    const url = 'http://localhost:5000/auth/checkLogin'

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })

    const textResponse = await response.text()
    return textResponse
}

export async function login(username, password) {
    const url = 'http://localhost:5000/auth/login'
    const requestBody = {
        username: username,
        password: password,
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        credentials: 'include',
    })

    const textResponse = await response.text()
    return textResponse
}

export async function logout() {
    const url = 'http://localhost:5000/auth/logout'
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })

    const textResponse = await response.text()
    return textResponse
}

export async function register(username, password) {
    const url = 'http://localhost:5000/auth/createAcc'
    const requestBody = {
        username: username,
        password: password,
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        credentials: 'include',
    })

    if(!response.ok){
        throw new Error(await response.text())
    }

    const textResponse = await response.text()
    return textResponse
}

export async function deleteNewsItem(ID) {
    const url = `http://localhost:5000/news/delete/${ID}`

    const response = await fetch(url, {
        method: 'DELETE',
        credentials: 'include',
    })

    const data = await response.text()
    return data
}

export async function updateNewsItem(ID, updatedData) {
    const url = `http://localhost:5000/news/update/${ID}`

    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: updatedData.title,
            message: updatedData.message,
            priority: updatedData.priority,
            date: updatedData.date,
        }),
        credentials: 'include',
    })

    const data = await response.text()
    return data
}

export async function createNews(newsData) {
    const url = `http://localhost:5000/news/create`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: newsData.title,
            message: newsData.message,
            priority: newsData.priority,
        }),
        credentials: 'include',
    })

    const data = await response.text()
    return data
}

