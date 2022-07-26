import { MappedDiscordProfile } from './DiscordProfile';

export type UserAccount = {
  discordProfile: MappedDiscordProfile;
  publicKey: string;
  publicKeyFormatted: string;
  userBalance: number;
};

export type UserAccountContext = {
  userAccount: UserAccount;
  setUserAccount: (userAccount: UserAccount) => void;
};
