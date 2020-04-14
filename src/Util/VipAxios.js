import axios from 'axios';
import {COURSE_BASE_URL} from './courseBase';

export let vipAxios = axios.create({
    baseURL: COURSE_BASE_URL,
})
