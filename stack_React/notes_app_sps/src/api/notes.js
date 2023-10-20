import axios from './axios';

export const getNotesRequest = ()=>axios.get(`/notes`);
export const createNoteRequest = ( note ) => axios.post(`/notes`, note);