export type MappedDiscordProfile = {
  isMember: boolean;
  discordHandle: string;
  level: number;
  messageCount: number;
  discordRank: string;
  xp: {
    currentXP: number;
    necessaryXP: number;
    totalXP: number;
  };
};

export type DiscordProfile = {
  avatar: string;
  detailed_xp: number[];
  discriminator: string;
  guild_id: string;
  id: string;
  level: number;
  message_count: number;
  username: string;
  xp: number;
};
