export const URL_BASE = "http://localhost:3003"

export const token = {
    headers:{
        authorization: localStorage.getItem('token'),
    }
}