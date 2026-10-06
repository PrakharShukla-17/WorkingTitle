// creating a customized, reusable copy of the Axios HTTP client that comes pre-packaged with default settings.
//Think of an Axios instance like programming a speed dial button

import axios from 'axios';
const api= axios.create({
    baseURL : 'http://localhost:5173/backend%20link/auth/signup',
    withCredentials : 'true',   // Tells the browser to send cookies with cross-origin requests
                                // and accept Set-Cookie headers returned by the server
});
export default api;

