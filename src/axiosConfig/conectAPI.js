import axios from "axios";

export const conectAPI = axios.create({baseURL: 'https://readjourney.b.goit.study/api'});