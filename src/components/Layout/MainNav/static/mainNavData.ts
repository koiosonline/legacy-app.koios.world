
export const mainNavData = (address: string) => {
  
  return {
    nav: [
      {
        title: 'My profile',
        linkTo: `/profile/${address ? address : ""}`,
        icon: 'user-circle',
      },
      {
        title: 'Learning',
        linkTo: '/worlds',
        icon: 'book',
      },
      {
        title: 'Earning',
        linkTo: '/earn',
        icon: 'money',
      },
      {
        title: 'Titan leaderboard',
        linkTo: '/leaderboard',
        icon: 'trophy',
      },
      {
        title: 'Contribute',
        linkTo: '/contribute',
        icon: 'handshake',
      },
    ],
    socials: [
      {
        icon: 'youtube',
        linkTo: 'https://www.youtube.com/c/KOIOSMEDIA/featured',
      },
      {
        icon: 'discord',
        linkTo: 'https://discord.gg/jBjudugeBa',
      },
      {
        icon: 'twitter',
        linkTo: 'https://twitter.com/koiosdao',
      },
      {
        icon: 'github',
        linkTo: 'https://github.com/koiosonline',
      },
    ],
  };
};
