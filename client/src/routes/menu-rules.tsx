import { Button, styled } from '@mui/material';
import { AppRoles } from '.';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';
import ProfileDetail from '../pages/Profile/ProfileDetail.tsx/ProfileDetail';
import ProfileListings from '../pages/ProfileListings/ProfileListings';
import Settings from '../pages/Settings/Settings';
import SignUp from '../pages/SignUp/SignUp';

/**
 * Route Rules used to
 * 1. Hold Metadata for which roles see what
 * 2. Used to match a path with a page, optionally, render a component
 */
export interface IMenuItemRule {
  /**
   * unique key
   */
  key: string;
  /**
   * route label
   */
  label: string;
  /**
   * Optional: page to render
   */
  page?: React.FunctionComponent<any>;
  /**
   * Hide frm the menu?
   */
  hide?: boolean;
  /**
   * Optional: component to render
   */
  component?: JSX.Element;
  /**
   * ui page path
   */
  path: string;
  /**
   * Roles that can load page
   */
  canView: AppRoles[];
  /**
   * public or private
   */
  authenticated: boolean;
}

const NavbarButton = styled(Button)({
  padding: '15px 0',
});

/**
 * Business logic static class implementation for resolving menu rules
 */
export class MenuResolver {
  private static readonly rootPagesMenuRules: IMenuItemRule[] = [
    {
      key: 'become-sitter-to-dashboard',
      label: 'Become a Sitter',
      path: '/dashboard',
      page: Dashboard,
      canView: [AppRoles.PET_OWNER],
      authenticated: true,
    },
    {
      key: 'become-sitter-signup',
      label: 'Become a sitter',
      path: '/signup?accountType=pet_sitter',
      canView: [],
      authenticated: false,
    },
    {
      key: 'dashboard',
      label: 'Dashboard',
      path: '/dashboard',
      canView: [AppRoles.PET_OWNER],
      authenticated: true,
    },
    {
      key: 'listings',
      label: 'Listings',
      path: '/listings',
      page: ProfileListings,
      canView: [AppRoles.PET_OWNER],
      authenticated: true,
    },
    {
      key: 'my-jobs',
      label: 'My Jobs',
      path: '/my-jobs',
      page: Dashboard, // dashboard until integrated
      canView: [AppRoles.PET_SITTER],
      authenticated: true,
    },
    {
      key: 'my-sitters',
      label: 'My Sitters',
      page: Dashboard, // dashboard until integrated
      path: '/sitters',
      canView: [AppRoles.PET_OWNER],
      authenticated: true,
    },
    {
      key: 'messages',
      label: 'Messages',
      page: Dashboard, // dashboard until integrated
      path: '/messages',
      canView: [AppRoles.PET_SITTER, AppRoles.PET_OWNER],
      authenticated: true,
    },
    {
      key: 'settings',
      label: 'Settings',
      page: Settings,
      hide: true,
      path: '/profile/settings',
      canView: [AppRoles.PET_OWNER, AppRoles.PET_SITTER],
      authenticated: true,
    },
    {
      key: 'profile-details',
      label: '',
      hide: true,
      page: ProfileDetail,
      path: '/profile/:id',
      canView: [AppRoles.PET_OWNER],
      authenticated: true,
    },
  ];

  private static readonly authMenuRules: IMenuItemRule[] = [
    {
      key: 'nav-bar-button-login',
      label: 'Nav Bar Button Login',
      page: Login,
      hide: false,
      component: (
        <NavbarButton variant="outlined" size="large" fullWidth>
          Login
        </NavbarButton>
      ),
      path: '/login',
      canView: [],
      authenticated: false,
    },
    {
      key: 'nav-bar-button-signup',
      label: 'Nav Bar Button Sign Up',
      page: SignUp,
      hide: false,
      component: (
        <NavbarButton variant="contained" size="large" fullWidth disableElevation>
          Sign up
        </NavbarButton>
      ),
      path: '/signup',
      canView: [],
      authenticated: false,
    },
  ];

  /**
   * filters all the rules that match the user role. This can be used to generate dynamic menus
   * And to provide the switch values to React Router DOM
   * @param userRole user's role
   * @returns filtered list of menu rules
   */
  public static generateRootMenuRules(userRole: string): IMenuItemRule[] {
    return this.rootPagesMenuRules.filter((rule: IMenuItemRule) =>
      rule.canView.some((role: AppRoles) => role.toUpperCase() === userRole.toUpperCase()),
    );
  }

  /**
   * This can be used to generate dynamic menus
   * And to provide the switch values to React Router DOM
   * @returns the rules for auth pages
   */
  public static getAuthMenuRules(): IMenuItemRule[] {
    return this.authMenuRules;
  }
}
