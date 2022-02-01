type getLiteratureProps = {
  world: string;
  worldLevel: string;
  article: string;
};

export const getVideoInfo = async (levelAddress) => {
  const baseUrl = "https://srv1.web3examples.com:8081/ipfs/";
  try {
    const getVideos = await fetch(`${baseUrl + levelAddress}`);
    const videos = await getVideos.json();
    return videos;
  } catch (e) {
    console.log(e);
  }
};

export const getLiterature = async (props: getLiteratureProps) => {
  const baseUrl =
    "https://raw.githubusercontent.com/koiosonline/literature/main";
  const world = props.world;
  const worldLevel = props.worldLevel;
  const article = props.article;

  try {
    const fetchLiteratureFile = await fetch(
      `${baseUrl}/${world}/${worldLevel}/${article}`
    );

    if (fetchLiteratureFile.ok) {
      return await fetchLiteratureFile.text();
    } else {
      throw new Error(fetchLiteratureFile.statusText);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getDiscordProfile = async (discordUsername: string) => {
  const baseUrl = "https://koios-middleware.herokuapp.com/discordLevels/";

  try {
    const getDiscordProfileData = await fetch(`${baseUrl + discordUsername}`);
    const discordProfileData = await getDiscordProfileData.json();
    return discordProfileData;
  } catch (e) {
    console.log(e);
    return e; 
  }
};
