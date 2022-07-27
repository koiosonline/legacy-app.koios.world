import { DiscordProfile } from '../../types/UserProfile/DiscordProfile';
import { FormatPublicKey } from '../Util/FormatPublicKey';
import { getUserRank } from './getUserRank';

export const mapDiscordProfileData = (discordUsername, discordProfile) => {
  const checkIsMember = !!discordProfile;
  const getDiscordRank = checkIsMember ? getUserRank(discordProfile?.level) : undefined;

  if (discordUsername || discordProfile) {
    return {
      isMember: checkIsMember,
      discordHandle: discordProfile?.username || discordUsername,
      level: discordProfile?.level,
      messageCount: discordProfile?.message_count,
      discordRank: getDiscordRank,
      xp: {
        currentXP: discordProfile?.detailed_xp[0],
        necessaryXP: discordProfile?.detailed_xp[1],
        totalXP: discordProfile?.detailed_xp[2],
      },
    };
  }

  return undefined;
};

export const mapUserData = async (
  accountAddress: string,
  userBalance: number,
  discordUsername?: string,
  discordProfile?: DiscordProfile
) => {
  return {
    publicKey: accountAddress,
    publicKeyFormatted: FormatPublicKey(accountAddress),
    userBalance: userBalance,
    discordProfile: mapDiscordProfileData(discordUsername, discordProfile),
  };
};
