export interface IBooking {
  userId: string;
  sitterId: string;
  start?: Date;
  end?: Date;
  accepted?: boolean;
  declined?: boolean;
  paid?: boolean;
  pending?: boolean;
  _id?: string;
}
