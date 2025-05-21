import axios from 'axios';
import { ShowProfileRequest, ShowProfileResponse } from '../types/types';

const baseUrl = 'https://igroom.ru/api/web/v1/';

export const showProfile = async (
    body: ShowProfileRequest,
): Promise<ShowProfileResponse> => {
    const res = await axios.post(`${baseUrl}show_profile`, body, {
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'ru',
        },
    });
    return res.data;
};
