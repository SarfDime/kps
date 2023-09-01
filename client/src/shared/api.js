const mainURL = 'http://localhost:5000'

///////// ACCOUNT APIS /////////

/// CHECK LOGIN
export async function checkLogin() {
    const url = `${mainURL}/auth/checkLogin`

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

/// LOGIN
export async function login(username, password) {
    const url = `${mainURL}/auth/login`
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

/// LOGOUT
export async function logout() {
    const url = `${mainURL}/auth/logout`
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

/// REGISTER
export async function register(username, password) {
    const url = `${mainURL}/auth/createAcc`
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

///////// NEWS APIS ///////////

/// READ
export async function fetchData() {
    const response = await fetch(`${mainURL}/news/read`)
    const data = await response.json()
    return data
}

/// DELETE
export async function deleteNewsItem(ID) {
    const url = `${mainURL}/news/delete/${ID}`

    const response = await fetch(url, {
        method: 'DELETE',
        credentials: 'include',
    })

    const data = await response.text()
    return data
}

/// UPDATE
export async function updateNewsItem(ID, updatedData) {
    const url = `${mainURL}/news/update/${ID}`

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
    const url = `${mainURL}/news/create`

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

