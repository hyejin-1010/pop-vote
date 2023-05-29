import axios from 'axios';

export default function getDrink(id: string) {
  return axios.post(`https://www.moon-rises-in-space.store/Drink?drink_id=${id}`); 
}
