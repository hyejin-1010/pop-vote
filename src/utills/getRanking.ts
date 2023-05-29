import axios from 'axios';

export default function getRankings() {
  return axios.get('http://internal-ilb-1826088408.ap-northeast-2.elb.amazonaws.com/Ranking'); 
}
