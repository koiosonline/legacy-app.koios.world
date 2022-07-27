import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '../../Util/Icon';
import { useSizes } from '../../Util/useSizes';
import koiosLogo from '../../../assets/images/logos/koios-logo.svg';
import MainNavData from './static/MainNavData.json';
import { SvgSprite } from '../../Util/SvgSprite';
import { web3Modal } from '../../Web3/WalletProvider';
import { useWeb3 } from '../../../components/Web3/useWeb3';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const MainNav = () => {
  const { connectWallet, disconnectWallet } = useWeb3();
  const { width } = useSizes();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const isMobile = width < 1200;

  const toggleMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    } else {
      disconnectWallet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        <div className='main-nav__connect'>
          <ConnectButton chainStatus="none" showBalance={false} />
        </div>

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
      </nav>
    </>
  );
};
