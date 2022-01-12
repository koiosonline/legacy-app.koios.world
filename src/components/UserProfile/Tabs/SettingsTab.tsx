import { Icon } from '../../Util/Icon';
import { useWeb3 } from '../../Web3/useWeb3';

type SettingsTabProps = {
  title: string;
};

export const SettingsTab: React.FC<SettingsTabProps> = () => {
  const { disconnectWallet } = useWeb3();

  return (
    <div className="settings-tab">
      <button className="settings-tab__button">
        <Icon type="sync" />
        Sync profile data
      </button>
      
      <a
        className="settings-tab__button"
        href="https://clay.self.id/"
        target={'_blank'}
        rel={'noreferrer noopener'}
      >
        <Icon type="edit-profile" />
        Edit profile
      </a>

      <button className="settings-tab__button">
        <Icon type="trash" />
        Delete progress
      </button>

      <button
        className="settings-tab__button"
        onClick={() => disconnectWallet()}
      >
        <Icon type="sign-out" />
        Disconnect wallet
      </button>
    </div>
  );
};
