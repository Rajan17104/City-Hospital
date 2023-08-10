import axios from 'axios';
import { BASE_URL } from '../utils/BaseURL';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

export const sendRequest = (config) => {
    return instance.request(config)
}

export const getRequest = (path) => {
    return sendRequest({
        method: 'GET',
        url: path
    })
}

export const addRequest = (path, data) => {
    console.log(path, data);
    return sendRequest({
        method: 'POST',
        url: path,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)

    })
}

export const deleteRequest = (path) => {
    return sendRequest({
        method: 'DELETE',
        url: path
    })
}

export const putRequest = (path, data) => {
    return sendRequest({
        method: 'PUT',
        url: path,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    })
}