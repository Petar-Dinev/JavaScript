export function getUserData() {
   return JSON.parse(sessionStorage.getItem('user'))
}

export function setUserData(data) {
    sessionStorage.setItem('user', JSON.stringify(data))
}

export function clearUserData(data) {
    sessionStorage.removeItem('user')
}

export function createSubmitHandler(callback) {
    return (e) => {
       e.preventDefault()
       const formData = new FormData(e.target);
       const data = Object.fromEntries(formData)
       callback(data)
    }
}