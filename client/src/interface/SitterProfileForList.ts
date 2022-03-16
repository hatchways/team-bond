export interface SitterProfileForList {
  _id: string;
  userId: string;
  name: string;
  description: string;
  blurb: string;
  city: string;
  photo?: string;
  rate: number;
}
