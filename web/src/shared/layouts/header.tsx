import { ROUTES } from '@routes/routes-config';
import { getHeaderContent } from '@utils/get-header';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const urlParams = new URLSearchParams(search);

  const isLogin = matchPath(ROUTES.LOGIN, pathname) !== null;
  const isSignUp = matchPath(ROUTES.SIGNUP, pathname) !== null;

  if (isLogin || isSignUp) {
    return null;
  }

  return (
    <header className="header-layout bg-gray-white text-gray-900">
      {getHeaderContent(pathname, urlParams, navigate)}
    </header>
  );
};

export default Header;
