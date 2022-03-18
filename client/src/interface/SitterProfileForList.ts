export interface SitterProfileForList {
  _id: string;
  userId: string;
  name: string;
  description: string;
  blurb: string;
  address: string;
  city: string;
  photo?: string;
  rate: number;
}
