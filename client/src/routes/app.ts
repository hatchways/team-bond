import Login from '../pages/Login/Login';
import Signup from '../pages/SignUp/SignUp';
import Dashboard from '../pages/Dashboard/Dashboard';
import { AccountType } from '../types/AccountType';
import Settings from '../pages/Settings/Settings';
import NotFound from '../pages/NotFound/NotFound';

export const allRoutes = [
  {
    route: '/dashboard',
    page: Dashboard,
    canView: [AccountType.PET_OWNER, AccountType.PET_SITTER],
  },
  {
    route: '/login',
    page: Login,
    canView: null,
  },
  {
    route: '/signup',
    page: Signup,
    canView: null,
  },

  {
    route: '/profile/settings',
    page: Settings,
    canView: [AccountType.PET_OWNER, AccountType.PET_SITTER],
  },

  {
    route: '*',
    page: NotFound,
    canView: null,
  },
];
