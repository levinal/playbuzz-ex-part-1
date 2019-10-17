import axios from 'axios';

export default axios.create({
    baseURL: "https://playbuzz-cdn.s3.amazonaws.com"
});