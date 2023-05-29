import axios from 'axios';

export default function getRankings() {
  return axios.get('https://www.moon-rises-in-space.store/Ranking'); 
}
