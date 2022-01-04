import { MappedDiscordProfile } from './DiscordProfile';
import { TokenBalance } from './TokenBalance';

export type UserAccount = {
  description: string;
  discordProfile: MappedDiscordProfile;
  emoji: string;
  name: string;
  profileBanner: string;
  profileImage: string;
  publicKey: string;
  publicKeyFormatted: string;
  tokenBalance: TokenBalance;
};

export type UserAccountContext = {
  userAccount: UserAccount;
  setUserAccount: () => void;
};
