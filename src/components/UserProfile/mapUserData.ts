import { DecentralizedProfile } from "../../types/UserProfile/DecentralizedProfile";
import { FormatPublicKey } from "../Util/FormatPublicKey";
import { getCidImage } from "../Web3/Ipfs";

export const mapUserData = async (accountAddress: string, decentralizedProfile: DecentralizedProfile, discordProfile) => {
  const userProfile = {
    publicKey: accountAddress,
    publicKeyFormatted: FormatPublicKey(accountAddress),
    name: decentralizedProfile.name,
    emoji: decentralizedProfile.emoji,
    description: decentralizedProfile.description,
    profileBanner: await getCidImage(decentralizedProfile.background.original.src),
    profileImage: await getCidImage(decentralizedProfile.image.original.src),
    discordProfile: discordProfile
  };
  return userProfile;
};
