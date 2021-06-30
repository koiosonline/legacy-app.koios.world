import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "../../Util/Icon";
import { useSizes } from "../../Util/useSizes";
import koiosLogo from "../../../assets/images/logos/koios-logo.svg";
import {
  connectWeb3,
  disconnectWeb3,
  provider,
  selectedAccount,
  profilePicture,
  selectedProfile,
  profileName,
} from "../../Web3/Web3";
import MainNavData from "./static/MainNavData.json";
import { SvgSprite } from "../../Util/SvgSprite";
import { Connect, Disconnect } from "../../Web3/ConnectionCheck";
import { web3Modal } from "../../Web3/WalletProvider";
import { UserContext } from "../../../Context/UserContext";



export const MainNav = () => {
  const {user, setUser} = useContext(UserContext);

  const { width } = useSizes();
  const isMobile = width < 769;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
    }
  };
  isMenuOpen
    ? (document.body.className = "menu-is-open")
    : (document.body.className = "");

  let initialDisconnectText = selectedAccount;
  const [disconnectButtonText, setDisconnectButtonText] = useState(
    "loading"
  );


  const connectProvider = async () => {
    const checkProvider = await Connect();
    setUser(checkProvider)
  }

  const disconnectProvider = async () => {
    const checkProvider = await Disconnect();
    setUser(checkProvider)
  }

  useEffect( () => {
    if (web3Modal.cachedProvider) {
    connectProvider();
    } else {
      disconnectProvider();
    }
  }, [user])


  useEffect(() => {
    setDisconnectButtonText(initialDisconnectText);
  }, [initialDisconnectText]);

  return (
    <>
      <div
        onClick={toggleMenu}
        className={`body-overlay ${isMenuOpen ? "body-overlay--active" : ""}`}
      ></div>
      {isMobile && (
        <header className="header-mobile container">
          <button
            className={`header-mobile__toggle ${isMenuOpen ? "header-mobile__toggle--rotate" : ""
              }`}
            onClick={toggleMenu}
          >
            <Icon type={isMenuOpen ? "close" : "hamburger"} />
          </button>
          <Link to="/" className="header-mobile__img-container">
            <img
              className="header-mobile__logo"
              src={koiosLogo}
              alt="Koios logo"
            />
          </Link>
        </header>
      )}

      <nav className={`main-nav ${isMenuOpen ? "main-nav--open" : ""}`}>
        <button
            className={`main-nav__mobile__toggle ${!isMenuOpen ? "hidden" : ""}`}
            onClick={toggleMenu}
        >
          <Icon type={isMenuOpen ? "close" : "hamburger"} />
        </button>
        <Link to="/" className="main-nav__img-container">
          <img className="main-nav__logo" src={koiosLogo} alt="Koios logo" />
        </Link>

        {!user && (
          <button className="main-nav__wallet" onClick={connectProvider}>
            Connect wallet
          </button>
        )}
        {user && (
          <>
            <div
              id="disconnect-wallet"
              className={'main-nav__wallet main-nav__wallet--disconnect'}
              onClick={disconnectProvider}
              onMouseEnter={() => setDisconnectButtonText("Disconnect")}
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
                <Icon
                  className="nav-list__icon gradient"
                  type={item.icon as keyof typeof SvgSprite}
                />
                <p>{item.title}</p>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="social">
          <ul className="social__list">
            {MainNavData.socials.map((item, index) => (
              <li className="social__list-item" key={index}>
                <a
                  className="social__link link"
                  href={item.linkTo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    className="social__icon"
                    type={item.icon as keyof typeof SvgSprite}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="user-profile">
          {!user && (
            <p className="user-profile__text--inactive">
              Please connect your wallet first
            </p>
          )}
          {user && (
            <>
              {!profilePicture ?
                  <img className="user-profile__profile-picture" src={"/images/pepe.png"} alt="Pepe the frog"/>
                  :
                  <img className="user-profile__profile-picture" src={profilePicture} alt="404"/>
              }
              <div className={'user-profile__textContainer'}>
                <p className="user-profile__textContainer__profile-name">{profileName}</p>
                <p className="user-profile__textContainer__pubkey">{selectedAccount}</p>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
