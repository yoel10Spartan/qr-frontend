import axios from "axios";
import {
    AUTH_LOGIN,
    AUTH_LOGOUT
} from "../../const/types";
import { errorAlert } from "../../utils/alerts/error";

const getHeaders = () => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

export const authLogin = (data) => {
    return async (dispatch) => {
        const body = JSON.stringify(data);

        const config = {
            headers: getHeaders(),
        };

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1.0/auth/login/`, body, config
            );

            dispatch({
                type: AUTH_LOGIN,
                payload: res.data.user
            });

            localStorage.setItem('token', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);
        } catch (error) {
            errorAlert('Usuario y contraseña invalidos');
        }
    }
}

export const authRefresh = () => {
    return async (dispatch) => {

        const config = {
            headers: getHeaders(),
        };

        const refresh = localStorage.getItem('refresh');

        const data = JSON.stringify({
            "refresh": refresh,
        })

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1.0/auth/refresh/`, data, config
            );

            localStorage.setItem('token', res.data.access);

        } catch (error) {
            console.log(error);
        }
    }
}

export const authRefreshData = () => {
    return async (dispatch) => {

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/v1.0/auth/refresh_data/`, config
            );

            dispatch({
                type: AUTH_LOGIN,
                payload: res.data
            });

        } catch (error) {
            console.log(error);
        }
    }
}