// import { fetchImage } from "./Ipfs";
import { getLegacy3BoxProfileAsBasicProfile } from "@ceramicstudio/idx";

const UseLegacy3BoxProfile = async (accountAddress: string) => {
  try {
    return await getLegacy3BoxProfileAsBasicProfile(accountAddress);
  } catch (e) {
    console.log(e);
    throw new Error('No legacy 3Box profile available');
  }
};

export const getUserProfile = async (accountAddress: string) => {
  //   const currentProfile = await FindProfile(accountAddress);

  try {
    // get IDX profile
    const profile = await window.idx.get("basicProfile", `${accountAddress}@eip155:4`);
    return profile;
    if (!profile) {
      const legacyProfile = await UseLegacy3BoxProfile(accountAddress);
      return legacyProfile;
    }
  } catch (e) {
    console.log("catch " + e);
    return await await UseLegacy3BoxProfile(accountAddress);
  }

  //   try {
  //     try {
  //       //getting the IDX profile
  //       const profile = await window.idx.get("basicProfile", `${accountAddress}@eip155:4`);
  //       const profilename: string = profile.name ? profile.name : accountAddress;
  //       let picturesource;
  //       if (profile.image) {
  //         picturesource = profile.image.original.src;
  //       }
  //       const entry = { name: profilename, image: picturesource };
  //       return entry;
  //     } catch {
  //       //get legacy 3box profile if IDX is not available
  //       console.error("IDX profile not found, using legacy");
  //       const profile = await getLegacy3BoxProfileAsBasicProfile(accountAddress);
  //       const profilename: string = profile.name ? profile.name : accountAddress;
  //       let picturesource;
  //       if (profile.image) {
  //         picturesource = profile.image.original.src;
  //       }
  //       const entry = { name: profilename, image: picturesource };
  //       return entry;
  //     }
  //   } catch {
  //     console.error("profile not found");
  //   }

  //   if (currentProfile.image) {
  //     const profilePicture = await fetchImage(currentProfile.image);
  //   }
  //   if (currentProfile.name) {
  //     const profileName = currentProfile.name;
  //   }
};
