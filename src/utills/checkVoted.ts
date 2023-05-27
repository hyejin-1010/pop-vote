import axios from 'axios';

export default function checkVoted() {
  return axios.post('https://www.moon-rises-in-space.store/CheckVoted'); 
}
