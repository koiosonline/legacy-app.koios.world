import { useWeb3 } from "../../components/Web3/useWeb3";

export const Authenticated = () => {
  const { disconnectWallet } = useWeb3();

  return (
    <div>
      <div>welcome</div>
      <button onClick={() => disconnectWallet()}>log out</button>
    </div>
  );
};
