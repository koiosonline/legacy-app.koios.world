import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '../../Util/Icon';
import { useSizes } from '../../Util/useSizes';
import koiosLogo from '../../../assets/images/logos/koios-logo.svg';
import MainNavData from './static/MainNavData.json';
import { SvgSprite } from '../../Util/SvgSprite';
import { web3Modal } from '../../Web3/WalletProvider';
import { UserContext } from '../../../Context/UserContext';
import { useWeb3 } from '../../../components/Web3/useWeb3';
import avatarPlaceholder from '../../../assets/images/placeholders/placeholder-titan.png';
import { AuthContext } from '../../../Context/AuthContext';
import { noop } from '../../Util/noop';

export const MainNav = () => {
  const { userAccount } = useContext(UserContext);
  const { connectWallet, disconnectWallet } = useWeb3();
  const { width } = useSizes();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [disconnectButtonText, setDisconnectButtonText] = useState<string>('loading');
  const { isAuthenticating, authError } = useContext(AuthContext);

  const isMobile = width < 1200;

  const toggleMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const initialDisconnectText = userAccount ? userAccount.publicKeyFormatted : 'selectedAccount';

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    } else {
      disconnectWallet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDisconnectButtonText(initialDisconnectText);
  }, [initialDisconnectText]);

  return (
    <>
      <div onClick={toggleMenu} className={`body-overlay ${isMenuOpen ? 'body-overlay--active' : ''}`}></div>
      {isMobile && (
        <header className="header-mobile container">
          <button
            className={`header-mobile__toggle ${isMenuOpen ? 'header-mobile__toggle--rotate' : ''}`}
            onClick={toggleMenu}
          >
            <Icon type={isMenuOpen ? 'close' : 'hamburger'} />
          </button>
          <Link to="/" className="header-mobile__img-container">
            <img className="header-mobile__logo" src={koiosLogo} alt="Koios logo" />
          </Link>
        </header>
      )}

      <nav className={`main-nav ${isMenuOpen ? 'main-nav--open' : ''} ${!isMobile ? 'main-nav--desktop' : ''}`}>
        <button className={`main-nav__mobile__toggle ${!isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
          <Icon type={isMenuOpen ? 'close' : 'hamburger'} />
        </button>
        <Link to="/" className="main-nav__img-container">
          <img className="main-nav__logo" src={koiosLogo} alt="Koios logo" />
        </Link>

        {!userAccount && (
          <button
            className="main-nav__wallet btn btn-gradient btn--fs-16"
            onClick={!isAuthenticating ? () => connectWallet() : noop}
          >
            {isAuthenticating && !authError && <Icon type="spinner" />}
            Connect wallet
          </button>
        )}
        {userAccount && (
          <>
            <div
              id="disconnect-wallet"
              className={'main-nav__wallet main-nav__wallet--disconnect'}
              onClick={disconnectWallet}
              onMouseEnter={() => setDisconnectButtonText('Disconnect')}
              onMouseLeave={() => setDisconnectButtonText(initialDisconnectText)}
            >
              {disconnectButtonText}
            </div>
          </>
        )}

        <ul className="nav-list">
          {MainNavData.nav.map((item, index) => (
            <li key={index}>
              <NavLink
                className="nav-list__link link"
                activeClassName="nav-list__link--active"
                to={item.linkTo}
                onClick={toggleMenu}
              >
                <Icon className="nav-list__icon gradient" type={item.icon as keyof typeof SvgSprite} />
                <p>{item.title}</p>
              </NavLink>
            </li>
          ))}

        </ul>

        <div className="social">
          <ul className="social__list">
            {MainNavData.socials.map((item, index) => (
              <li className="social__list-item" key={index}>
                <a className="social__link link" href={item.linkTo} target="_blank" rel="noreferrer">
                  <Icon className="social__icon" type={item.icon as keyof typeof SvgSprite} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="user-profile">
          {!userAccount && <p className="user-profile__text--inactive">Please connect your wallet first</p>}
          {userAccount && (
            <Link to={'/profile'} className={'user-profile__link'}>
              <div className={'user-profile__textContainer'}>
                <p className="user-profile__textContainer__pubkey">{initialDisconnectText}</p>
              </div>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};
