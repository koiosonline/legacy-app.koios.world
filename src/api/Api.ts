
// const baseUrl = "https://www.googleapis.com/youtube/v3/";
// const channelId = "UCMyWjw6D7eq6swaOljtwJdw";

// Playlist Id's
// const blockchainLevel1Id = "PL_tbH3aD86Kt-vJy4Q-rvZtXDmrLMG1Ef";

// export const getYouTubeVideos = async () => {
//   try {
//     const getVideos = await fetch(`${baseUrl}`);
//     const videos = await getVideos.json();
//     console.log(videos);
//   } catch (e) {
//     console.log(e);
//   }
// };

export const getVideoInfo = async (levelAddress) => {
  const baseUrl = "https://cloudflare-ipfs.com/ipfs/";
  try {
    const getVideos = await fetch(`${baseUrl + levelAddress}`);
    const videos = await getVideos.json();
    return videos;
  } catch (e) {
    console.log(e);
  }
};