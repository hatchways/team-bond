export interface User {
  name: string;
  email: string;
  role: string;
}

export interface SearchUsersApiData {
  users?: User[];
  error?: { message: string };
}
