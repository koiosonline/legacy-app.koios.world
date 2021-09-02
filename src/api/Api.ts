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

type getLiteratureProps = {
  world: string,
  article: string
}

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

export const getLiterature = async (props: getLiteratureProps) => {
  try {
    const mdFile = await import(`../articles/${props.world}/${props.article}`);
    const content = await fetch(mdFile.default);
    const parsedContent = await content.text();
    return parsedContent;
  } catch (e) {
    console.log(e);
  }
};