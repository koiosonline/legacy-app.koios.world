// import { fetchImage } from "./Ipfs";

export const getDecentralizedProfile = async (accountAddress: string) => {
  //   const currentProfile = await FindProfile(accountAddress);

  try {
    // get IDX profile
    const profile = await window.idx.get("basicProfile", `${accountAddress}@eip155:4`);
    return profile;
  } catch (e) {
    console.log(e);
    throw new Error('No IDX profile available');
  }


  //   if (currentProfile.image) {
  //     const profilePicture = await fetchImage(currentProfile.image);
  //   }
  //   if (currentProfile.name) {
  //     const profileName = currentProfile.name;
  //   }
};