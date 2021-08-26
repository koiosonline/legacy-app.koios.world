import { useEffect, useState } from "react";
import {
  getTokenCountTDFA,
  getTokenCountBlockchain,
  getTokenCountOverall
} from "../components/Web3/Tokencount";
import Loading from "../components/Loading";

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

export const Leaderboard = () => {
  const [leaderboard, showLeaderboard] = useState<any[]>([]);
  const [active, setActive] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    updateLeaderboardBlockchain();
  }, []);

  const updateLeaderboardBlockchain = async () => {
    setIsLoading(true);
    const updatedRanking = await getTokenCountBlockchain();
    showLeaderboard(updatedRanking);
    setIsLoading(false);
  };

  const updateLeaderboardTDFA = async () => {
    setIsLoading(true);
    const updatedRanking = await getTokenCountTDFA();
    showLeaderboard(updatedRanking);
    setIsLoading(false);
  };

  const updateLeaderboardOverall = async () => {
    setIsLoading(true);
    const updatedRanking = await getTokenCountOverall();
    showLeaderboard(updatedRanking);
    setIsLoading(false);
  };

  return (
    <div className="leaderboard container">
      <h1 className="leaderboard__header">Leaderboard</h1>
      <div className="leaderboard-selector">
        <button
          className={`leaderboard-selector__button ${
            active ? "leaderboard-selector__button--active active-leaderboard" : ""
          }`}
          onClick={() => {
            updateLeaderboardBlockchain();
            setActive(!active);
          }}
        >
          <p>Blockchain leaderboard</p>
        </button>
        <button
          className={`leaderboard-selector__button ${
            !active ? "leaderboard-selector__button--active active-leaderboard" : ""
          }`}
          onClick={() => {
            updateLeaderboardTDFA();
            setActive(!active);
          }}
        >
          <p>TDFA leaderboard</p>
        </button>
        <button
          className={`leaderboard-selector__button ${
            !active ? "leaderboard-selector__button--active active-leaderboard" : ""
          }`}
          onClick={() => {
            updateLeaderboardOverall();
            setActive(!active);
          }}
        >
          <p>Overall leaderboard</p>
        </button>
      </div>

      <div className="ranking">
        <div className="ranking__metadata">
          <h2 className="ranking__metadata-title">Position</h2>
          <h2 className="ranking__metadata-title">Participants</h2>
          <h2 className="ranking__metadata-title">Titan-tokens</h2>
        </div>

        {isLoading && <Loading/>}
        {!isLoading && (
          <ul>
            {leaderboard.map((users: any, index: number) => {
              return (
                <li key={index} className={`${users.selectedAccount ? 'ranking__item__currentUser' : 'ranking__item'}`}>
                  <p className="ranking__position">{users.index}</p>
                  <img
                    className={`ranking__user-image ${
                      users.image === "default"
                        ? "ranking__user-image--not-available"
                        : ""
                    }`}
                    src={
                      users.image !== "default"
                        ? users.image
                        : "/images/pepe.png"
                    }
                    alt="User profile"
                  />
                  <p className="ranking__username">{users.address}</p>
                  <p className="ranking__user-balance">{users.balance}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
