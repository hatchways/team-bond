import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IMenuItemRule, MenuResolver } from '.';
import { useAuth } from '../context/useAuthContext';

export const demoRole = 'PET_OWNER';

const AppRouter = () => {
  const { loggedInUser, logout } = useAuth();
  const [menu, setMenu] = useState<IMenuItemRule[]>();

  useEffect(() => {
    // TODO uses demo roles, integrate with back-end
    setMenu([...MenuResolver.generateRootMenuRules(demoRole), ...MenuResolver.getAuthMenuRules()]);
  }, [loggedInUser]);

  return (
    <Switch>
      {menu &&
        menu.map((menuItem: IMenuItemRule) => (
          <Route key={menuItem.path} path={menuItem.path} component={menuItem.page} />
        ))}
    </Switch>
  );
};

export default AppRouter;
