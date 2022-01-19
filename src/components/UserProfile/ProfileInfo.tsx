import { TokenBalance } from '../../types/UserProfile/TokenBalance';
import { Icon } from '../Util/Icon';

type ProfileInfoProps = {
  walletAddress: string;
  tokenBalance: TokenBalance;
  discordUsername?: string;
};

export const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
  return (
    <ul className="profile-info">
      <li className="profile-info__list-item">
        <Icon type="wallet" className="profile-info__icon" />
        <span className="profile-info__label">Wallet address:</span>
        {props.walletAddress}
      </li>

      <li className="profile-info__list-item">
        <img
          src={props.tokenBalance.tokenIcon}
          alt="Token Icon"
          className="profile-info__img"
        />
        <span className="profile-info__label">Titan-tokens:</span>
        {props.tokenBalance.balance}
      </li>

      {props.discordUsername && (
        <li className="profile-info__list-item">
          <Icon type="discord" className="profile-info__icon" />
          <span className="profile-info__label">Discord:</span>
          {props.discordUsername}
        </li>
      )}
    </ul>
  );
};
