export default interface Drink {
  drink_id: string;
  name: string;
  vote_count: number;
  last_update: Date;
  img: string;
  alcohol_level: number;
  vote_count: number;
  rank?: number;
}