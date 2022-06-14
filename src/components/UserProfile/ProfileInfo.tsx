import { Icon } from '../Util/Icon';
import titanCoin from '../../assets/images/placeholders/placeholder-titan-token.png';

type ProfileInfoProps = {
  walletAddress: string;
  userBalance: number;
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
          src={titanCoin}
          alt="Token Icon"
          className="profile-info__img"
        />
        <span className="profile-info__label">Titan-tokens:</span>
        {props.userBalance}
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
