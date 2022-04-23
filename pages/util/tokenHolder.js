export const setToken = (token) => {
    cookie.set("token", token)
    Router.push('/')
}