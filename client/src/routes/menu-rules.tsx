import { Button, styled } from '@mui/material';
import { AppRoles } from '.';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';
import ProfileDetail from '../pages/Profile/ProfileDetail.tsx/ProfileDetail';
import Settings from '../pages/Settings/Settings';
import SignUp from '../pages/SignUp/SignUp';
import MessageBoard from '../pages/Message/MessageBoard';

/**
 * Route Rules used to
 * 1. Hold Metadata for which roles see what
 * 2. Used to match a path with a page, optionally, render a component
 */
export interface IMenuItemRule {
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
      label: 'Become a Sitter',
      path: '/dashboard',
      page: Dashboard,
      canView: [AppRoles.PET_OWNER],
      authenticated: true,
    },
    {
      label: 'Become a sitter',
      path: '/signup?accountType=pet_sitter',
      canView: [],
      authenticated: false,
    },
    {
      label: 'Dashboard',
      path: '/dashboard',
      canView: [AppRoles.PET_OWNER],
      authenticated: false,
    },
    {
      label: 'My Jobs',
      path: '/my-jobs',
      page: Dashboard, // dashboard until integrated
      canView: [AppRoles.PET_SITTER],
      authenticated: true,
    },
    {
      label: 'My Sitters',
      page: Dashboard, // dashboard until integrated
      path: '/sitters',
      canView: [AppRoles.PET_OWNER],
      authenticated: true,
    },
    {
      label: 'Messages',
      page: MessageBoard, // dashboard until integrated
      path: '/messages',
      canView: [AppRoles.PET_SITTER, AppRoles.PET_OWNER],
      authenticated: true,
    },
    {
      label: 'Settings',
      page: Settings,
      hide: true,
      path: '/profile/settings',
      canView: [AppRoles.PET_OWNER, AppRoles.PET_SITTER],
      authenticated: true,
    },
    {
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
      label: 'Nav Bar Button Login',
      page: Login,
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
      label: 'Nav Bar Button Sign Up',
      page: SignUp,
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
