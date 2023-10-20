import axios from 'axios';

export const getNotesRequest = ()=>axios.get(`/notes`)