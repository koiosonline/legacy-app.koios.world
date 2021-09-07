import { Link } from "react-router-dom";
import koiosLogo from "../../assets/images/logos/koios-logo.svg";

export const Header = () => {
  return (
    <header className="header container">
      <Link to="/" className="header__img-container">
        <img className="header__img" src={koiosLogo} alt="Koios logo" />
      </Link>
    </header>
  );
};
