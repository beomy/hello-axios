import axios from 'axios';
 
export function getTitle(id) {
    return axios({
        method: 'get',
        url: 'http://localhost:5000/posts/title/' + id,
    });
}

export function getContent(id) {
    return axios.get('http://localhost:5000/posts/content/' + id);    
}