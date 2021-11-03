import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "e87f83fb85bf4aa09bdf6605ebe144b7",
    },
  },
};

export const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions,
});
