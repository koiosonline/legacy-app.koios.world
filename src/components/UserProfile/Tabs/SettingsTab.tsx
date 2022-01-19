import { Icon } from '../../Util/Icon';
import { useWeb3 } from '../../Web3/useWeb3';

type SettingsTabProps = {
  title: string;
};

export const SettingsTab: React.FC<SettingsTabProps> = () => {
  const { disconnectWallet } = useWeb3();

  return (
    <div className="settings-tab">
      <ul className='settings'>
        <li className="settings__button">
          <Icon type="sync" />
          Sync profile data
        </li>

        <a
          className="settings__button"
          href="https://clay.self.id/"
          target={'_blank'}
          rel={'noreferrer noopener'}
        >
          <Icon type="edit-profile" />
          Edit profile
        </a>

        <li className="settings__button">
          <Icon type="trash" />
          Delete progress
        </li>

        <li
          className="settings__button"
          onClick={() => disconnectWallet()}
        >
          <Icon type="sign-out" />
          Disconnect wallet
        </li>
      </ul>
    </div>
  );
};
