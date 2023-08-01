import axios from 'axios';
import { BASE_URL } from '../utils/BaseURL';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

const sendRequest = (config) => {
    return instance.request(config)
}

export const getRequest = (path) => {
    return sendRequest({
        method: 'GET',
        url: path
    })
}

export const addRequest = (data, path) => {
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

export const putRequest = (data, path) => {
    return sendRequest({
        method: 'PUT',
        url: path,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    })
}