import axios from "axios";

const HttpClient = axios.create({
    baseURL : 'https://demo-web.click/api',
    headers: {
        "Content-Type": "application/json",
      },
})
export default HttpClient
