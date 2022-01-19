export const getUserRank = (level: number) => {
  switch (true) {
    case level >= 5 && level <= 9:
      return 'Beta Titan';
    case level >= 10 && level <= 24:
      return 'Alpha Titan';
    case level >= 25:
      return 'Meta Titan';
    default:
      return 'Titan';
  }
};
