import {
  connectWeb3,
  disconnectWeb3,
  provider
} from "./Web3--old";

export const Connect = async () => {
  await connectWeb3();
  return provider;
};

export const Disconnect = async () => {
  await disconnectWeb3();
  return provider;
};
