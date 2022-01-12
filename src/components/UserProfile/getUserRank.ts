export const getUserRank = (level: number) => {
  switch (true) {
    case level >= 5 && level <= 9:
      return 'BETA TITAN';
    case level >= 10 && level <= 24:
      return 'ALPHA TITAN';
    case level >= 25:
      return 'META TITAN';
    default:
      return 'TITAN';
  }
};
