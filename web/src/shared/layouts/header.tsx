import Modal from '@components/modal/modal';
import { ROUTES } from '@routes/routes-config';
import { getHeaderContent } from '@utils/get-header';
import { useState } from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const urlParams = new URLSearchParams(search);

  const [showExitModal, setShowExitModal] = useState(false);

  const isLogin = matchPath(ROUTES.LOGIN, pathname) !== null;
  const isMain = matchPath(ROUTES.MAIN, pathname) !== null;
  const isSignUp = matchPath(ROUTES.SIGNUP, pathname) !== null;
  const isWorry = matchPath(ROUTES.WORRY, pathname) !== null;

  if (isLogin || isWorry) {
    return null;
  }

  const handleBack = () => {
    if (isSignUp || isWorry) {
      setShowExitModal(true);
      return;
    }

    navigate(-1);
  };

  const handleExitConfirm = () => {
    setShowExitModal(false);

    if (isSignUp) {
      navigate(ROUTES.LOGIN);
      return;
    }

    if (isWorry) {
      navigate(ROUTES.MAIN);
      return;
    }

    navigate(-1);
  };

  const handleExitCancel = () => {
    setShowExitModal(false);
  };

  return (
    <>
      <header className={isMain ? 'main-header-layout' : 'header-layout'}>
        {getHeaderContent(pathname, urlParams, handleBack)}
      </header>

      <Modal
        open={(isSignUp || isWorry) && showExitModal}
        title="현재 페이지를 나가시겠어요?"
        description="지금 나가면 작성한 내용은 저장되지 않아요"
        confirmText="나가기"
        cancelText="계속 작성하기"
        onConfirm={handleExitConfirm}
        onCancel={handleExitCancel}
      />
    </>
  );
};

export default Header;
