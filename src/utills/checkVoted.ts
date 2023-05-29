import axios from 'axios';

export default function checkVoted() {
  return axios.post('/CheckVoted', {}, {
    withCredentials: true,
  }); 
}
