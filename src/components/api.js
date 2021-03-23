import { API } from 'aws-amplify';

export const addUser = async (payload) => API.post(API_NAME, '/user', { body: payload });