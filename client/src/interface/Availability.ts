export interface Day {
  /**
   * start of availability time in minutes, 1439 minutes max, 0 mins. minimum
   */
  from: number;
  /**
   * start of availability time in minutes. 1439 minutes max
   */
  to: number;
}

export interface Availability {
  monday?: Day;
  tuesday?: Day;
  wednesday?: Day;
  thursday?: Day;
  friday?: Day;
  saturday?: Day;
  sunday?: Day;
  _id: string;
  sitterId: string;
  active: boolean;
  name: string;
  __v: number;
}
