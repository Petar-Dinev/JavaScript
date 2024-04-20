export function getUserData() {
    return JSON.parse(localStorage.getItem('auth'))
}

export function setUserData(userData) {
    localStorage.setItem('auth', JSON.stringify(userData))
}

export function clearUserData() {
    localStorage.removeItem('auth')
}

export function createSubmitHandler(callback) {
    return (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        callback(data)
    }
}