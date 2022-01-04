import { useWeb3 } from '../../Web3/useWeb3';

type Props = {
  title: string;
};

export const SettingsTab: React.FC<Props> = () => {
  const { disconnectWallet } = useWeb3();

  return (
    <div>
      <button>Sync profile data</button>
      <button onClick={() => disconnectWallet()}>log out</button>
    </div>
  );
};
