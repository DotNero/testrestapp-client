import api from '../http';
// import { AxiosResponse } from 'axios';

export default class PostService {
    static async getPosts() {
        return api.get('get_posts')
    }
}

