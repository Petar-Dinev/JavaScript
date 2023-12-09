export function getUserData() {
  return JSON.parse(sessionStorage.getItem("userData"));
}

export function setUserData(userData) {
  sessionStorage.setItem("userData", JSON.stringify(userData));
}

export function clearUserData() {
  sessionStorage.removeItem("userData");
}

export function createSubmitHandler(callback) {
  return (e) => {
    e.preventDefault();
    callback(Object.fromEntries(new FormData(e.target)));
  };
}
