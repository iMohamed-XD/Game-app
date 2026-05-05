import axios from "axios";

const apiClient = axios.create({
    params: {
        key:"dbdf093ad970418d8024cf52b823cbbc"
    },
    baseURL: "https://api.rawg.io/api"
})

export default apiClient;