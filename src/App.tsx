import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';
import './assets/css/koios.scss';
import { Worlds } from './pages/Worlds';
import { WorldDetail } from './pages/WorldDetail/WorldDetail';
import { Layout } from './components/Layout/Layout';
import { Leaderboard } from './pages/Leaderboard';
import WorldOverview from './pages/WorldOverview';
import { Profile } from './pages/Profile/Profile';
import { ComingSoon } from './pages/ComingSoon';
import { Error404 } from './pages/Error404';
import Contribute from './pages/Contribute';
import ScrollToTop from './components/Util/scrollTop';
import ExplanationVideos from './pages/ExplanationVideos';
import Earn from './pages/Earn';
import VacancyDetail from './pages/VacancyDetail';
import { MarkdownEditor } from './pages/MarkdownEditor';
import { AuthContextProvider } from './Context/AuthContext';
import { UserContextProvider } from './Context/UserContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import avatarPlaceholder from './assets/images/placeholders/placeholder-titan.png';

import '@rainbow-me/rainbowkit/dist/index.css';
import { getDefaultWallets, RainbowKitProvider, AvatarComponent, lightTheme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const CustomAvatar: AvatarComponent = ({ ensImage, size }) => {
  return ensImage ? (
    <img src={ensImage} width={size} height={size} style={{ borderRadius: 999 }} />
  ) : (
    <img src={avatarPlaceholder} width={size} height={size} style={{ borderRadius: 999 }} />
  );
};

export const App = () => {
  const queryClient = new QueryClient();
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
        <Router>
          <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
              <UserContextProvider>
                <ScrollToTop />
                <Switch>
                  <Route path={['/editor']} exact>
                    <Switch>
                      <Route path="/editor" exact component={MarkdownEditor} />
                    </Switch>
                  </Route>

                  <Route>
                    <Layout>
                      <Switch>
                        <Route path="/worlds" exact component={Worlds} />
                        <Route path="/worlds/:worldContent" exact component={WorldOverview} />
                        <Route path="/worlds/:worldContent/:worldDetail/:videoSlug?" exact component={WorldDetail} />
                        <Route path="/coming-soon" exact component={ComingSoon} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="/leaderboard" exact component={Leaderboard} />
                        <Route path="/contribute" exact component={Contribute} />
                        <Route path="/explanation" exact component={ExplanationVideos} />
                        <Route path="/earn" exact component={Earn} />
                        <Route path="/earn/:vacancyDetail" exact component={VacancyDetail} />
                        <Route path="/" exact>
                          <Redirect to="/worlds" />
                        </Route>
                        <Route component={Error404} />
                      </Switch>
                    </Layout>
                  </Route>
                </Switch>
              </UserContextProvider>
            </AuthContextProvider>
          </QueryClientProvider>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
