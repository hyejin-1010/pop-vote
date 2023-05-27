export default interface Drink {
  drink_id: number;
  name: string;
  last_update: Date;
  img: string;
  alcohol_level: number;
  vote_count: number;
  rank?: number;
  description: string;
}