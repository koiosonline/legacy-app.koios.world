import {
  connectWeb3,
  disconnectWeb3,
  provider,
  selectedAccount,
  profilePicture,
  selectedProfile,
  profileName,
} from "./Web3";

// export const ConnectionCheck = async () => {
//   if (provider) {
//     await disconnectWeb3();
//     console.log("disconnectect");
//     return provider;
//   } else {
//     await connectWeb3();
//     console.log("connected");
//     return provider;
//   }
// };

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
