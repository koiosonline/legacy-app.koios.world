import { MappedDiscordProfile } from './DiscordProfile';

export type UserAccount = {
  description: string;
  discordProfile: MappedDiscordProfile;
  emoji: string;
  name: string;
  profileBanner: string;
  profileImage: string;
  publicKey: string;
  publicKeyFormatted: string;
  userBalance: number;
};

export type UserAccountContext = {
  userAccount: UserAccount;
  setUserAccount: (userAccount: UserAccount) => void;
};
