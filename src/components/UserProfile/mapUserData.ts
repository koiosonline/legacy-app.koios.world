import { DecentralizedProfile } from "../../types/UserProfile/DecentralizedProfile";
import { DiscordProfile } from "../../types/UserProfile/DiscordProfile";
import { FormatPublicKey } from "../Util/FormatPublicKey";
import { getCidImage } from "../Web3/Ipfs";

export const mapUserData = async (accountAddress: string, decentralizedProfile: DecentralizedProfile, discordProfile: DiscordProfile) => {
  const userProfile = {
    publicKey: accountAddress,
    publicKeyFormatted: FormatPublicKey(accountAddress),
    name: decentralizedProfile.name,
    emoji: decentralizedProfile.emoji,
    description: decentralizedProfile.description,
    profileBanner: await getCidImage(decentralizedProfile.background.original.src),
    profileImage: await getCidImage(decentralizedProfile.image.original.src),
    discordProfile: {
      discordHandle: discordProfile.username,
      level: discordProfile.level,
      messageCount: discordProfile.message_count,
      xp: {
        currentXP: discordProfile.detailed_xp[0],
        necessaryXP: discordProfile.detailed_xp[1],
        totalXP: discordProfile.detailed_xp[2]
      }
    }
  };
  return userProfile;
};
