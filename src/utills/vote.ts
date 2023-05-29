import axios from 'axios';
import Info from '@/types/info.type';

export default function vote(info: Info, drink: number) {
  return axios.post(`https://www.moon-rises-in-space.store/Vote?age=${info.age}&sex=${info.gender}&nation=${info.country}&drink_id=${drink}`, {}, {
    withCredentials: true,
  }); 
}

