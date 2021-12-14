export type UserAccount = {
  description: string;
  discordProfile: [];
  emoji: string;
  name: string;
  profileBanner: string;
  profileImage: string;
  publicKey: string;
  publicKeyFormatted: string;
};

export type UserAccountContext = {
  userAccount: UserAccount;
  setUserAccount: () => void;
}