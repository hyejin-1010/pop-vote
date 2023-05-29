import axios from 'axios';
import Info from '@/types/info.type';

export default function vote(info: Info, drink: number) {
  return axios.post(`http://internal-ilb-1826088408.ap-northeast-2.elb.amazonaws.com/Vote?age=${info.age}&sex=${info.gender}&nation=${info.country}&drink_id=${drink}`, {}, {
    withCredentials: true,
  }); 
}

