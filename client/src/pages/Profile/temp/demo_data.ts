export interface IDemoProfile {
  id: string;
  name: string;
  description: string;
  photo: string;
}

// placeholder
export interface IDemoReview {
  userId: string;
  userName: string;
  sitterId: string;
  rating: number;
  review: string;
  created: Date;
}

export const demoProfiles: IDemoProfile[] = [
  {
    id: '620a89724422dc58320b1bab',
    name: 'John Smith',
    description: `Dog Wisperer. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    photo: 'favicon.ico',
  },
];

export const demoReviews: IDemoReview[] = [
  {
    userId: '620a89724422dc58320b1bab',
    userName: 'Michael Jordan',
    sitterId: '620a89724422dc58320b1bab',
    rating: 4.5,
    review: `Very good. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    created: new Date(2022, 1, 2),
  },
  {
    userId: '620a89724422dc58320b1bab',
    userName: 'James Cameron',
    sitterId: '620a89724422dc58320b1bab',
    rating: 5,
    review: `Superb! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    created: new Date(2022, 1, 3),
  },
  {
    userId: '620a89724422dc58320b1bab',
    userName: 'Katie Perry',
    sitterId: '620a89724422dc58320b1bab',
    rating: 3,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    created: new Date(2022, 1, 3),
  },
  {
    userId: '620a89724422dc58320b1bab',
    userName: 'Katie Perry',
    sitterId: '620a89724422dc58320b1bab',
    rating: 3,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    created: new Date(2022, 1, 3),
  },
];
