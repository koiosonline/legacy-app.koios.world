import { Route, HashRouter as Router, Switch, Redirect } from "react-router-dom";
import "./assets/css/koios.scss";
import { Home } from "./pages/Home";
import { Worlds } from "./pages/Worlds";
import { WorldDetail } from "./pages/WorldDetail/WorldDetail";
import { Layout } from "./components/Layout/Layout";
import { Leaderboard } from "./pages/Leaderboard";
import WorldOverview from "./pages/WorldOverview";
import {Profile} from "./pages/Profile";
import { ComingSoon } from "./pages/ComingSoon";
import { useMemo, useState } from "react";
import { UserContext } from "./Context/UserContext";
import {Error404} from "./pages/Error404";
import Contribute from "./pages/Contribute";
import ScrollToTop from "./components/Util/scrollTop";
import ExplanationVideos from "./pages/ExplanationVideos";

export const App = () => {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser])

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
          <ScrollToTop/>
          <Layout>
            <Switch>
                <Route path="/" exact component={Home}><Redirect to="/worlds"/></Route>
                <Route path="/worlds" exact component={Worlds}/>
                <Route path="/worlds/:worldContent" exact component={WorldOverview}/>
                <Route path="/worlds/:worldContent/:worldDetail" exact component={WorldDetail}/>
                <Route path="/coming-soon" exact component={ComingSoon} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/leaderboard" exact component={Leaderboard}/>
                <Route path="/contribute" exact component={Contribute}/>
                <Route path="/explanation" exact component={ExplanationVideos}/>
                <Route component={Error404}/>
            </Switch>
          </Layout>
      </UserContext.Provider>
    </Router>
  );
};
