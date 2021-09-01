import {
  connectWeb3,
  disconnectWeb3,
  provider
} from "./Web3";

export const Connect = async () => {
  await connectWeb3();
  console.log("connected");
  return provider;
};

export const Disconnect = async () => {
  await disconnectWeb3();
  console.log("disconnected");
  return provider;
};
