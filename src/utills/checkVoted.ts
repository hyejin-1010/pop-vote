import axios from 'axios';

export default function checkVoted() {
  return axios.post('http://internal-ilb-1826088408.ap-northeast-2.elb.amazonaws.com/CheckVoted'); 
}
