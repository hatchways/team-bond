export interface Payment {
  _id: string;
  userId: string;
  sitterId: string;
  rate: number;
  hoursOfService: number;
  totalPayment: number;
  customerId: string;
}
