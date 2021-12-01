import { fetchImage } from "./Ipfs";
import { FindProfile } from "./Profiles";

export const getUserProfile = async (accountAddress: string) => {
  const currentProfile = await FindProfile(accountAddress);


  if (currentProfile.image) {
    const profilePicture = await fetchImage(currentProfile.image);
  }
  if (currentProfile.name) {
    const profileName = currentProfile.name;
  }
};


