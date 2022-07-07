import { getLegacy3BoxProfileAsBasicProfile } from '@ceramicstudio/idx';

export const FindProfile = async (address: string) => {
  try {
    try {
      //getting the IDX profile
      const profile = await window.idx.get('basicProfile', `${address}@eip155:137`);
      const profilename: string = profile.name ? profile.name : address;
      let picturesource;
      if (profile.image) {
        picturesource = profile.image.original.src;
      }
      const entry = { name: profilename, image: picturesource };
      return entry;
    } catch {
      //get legacy 3box profile if IDX is not available
      console.error('IDX profile not found, using legacy');
      const profile = await getLegacy3BoxProfileAsBasicProfile(address);
      const profilename: string = profile.name ? profile.name : address;
      let picturesource;
      if (profile.image) {
        picturesource = profile.image.original.src;
      }
      const entry = { name: profilename, image: picturesource };
      return entry;
    }
  } catch {
    console.error('profile not found');
  }
};
