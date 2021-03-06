import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getUsers = () => axiosInstance.get('/users');

const getPosts = () => axiosInstance.get('/posts');

const getComments = () => axiosInstance.get('/comments');

export {getUsers, getPosts, getComments};