import '@rainbow-me/rainbowkit/dist/index.css';
import { getDefaultWallets, RainbowKitProvider, AvatarComponent, lightTheme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import avatarPlaceholder from '../assets/images/placeholders/placeholder-titan.png';


export const { chains, provider } = configureChains(
  [chain.polygon, chain.mainnet],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

export const { connectors } = getDefaultWallets({
  appName: 'Koios',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export const CustomAvatar: AvatarComponent = ({ ensImage, size }) => {
  return ensImage ? (
    <img src={ensImage} width={size} height={size} style={{ borderRadius: 999 }} />
  ) : (
    <img src={avatarPlaceholder} width={size} height={size} style={{ borderRadius: 999 }} />
  );
};

export const RainbowKitConfigProvider: React.FC = (props) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        avatar={CustomAvatar}
        theme={lightTheme({
          accentColor: '#7645d9',
          accentColorForeground: 'white',
          borderRadius: 'medium',
          fontStack: 'system',
        })}
      >
        {props.children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
