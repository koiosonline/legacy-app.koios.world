import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { LENS_GET_PROFILE_IMAGE } from '../../../api/Apollo/queries/LENS_GET_PROFILE_IMAGE';
import avatarPlaceholder from '../../../assets/images/placeholders/placeholder-titan.png';
import { ipfsPrefix1, ipfsPrefix2, ipfsPrefix3, stripIpfsPrefix } from '../../Web3/Ipfs';

export const useLensProfile = (userAddress: string) => {
  const { data } = useQuery(LENS_GET_PROFILE_IMAGE(userAddress), { skip: !userAddress });
  const [profilePicture, setProfilePicture] = useState<string>(avatarPlaceholder);

  // Profile definitions
  const profile = data?.defaultProfile;
  const rawProfilePicture = profile?.picture?.original?.url;

  const checkIfProfilePictureIsIpfsAddress =
    rawProfilePicture?.startsWith(ipfsPrefix1) ||
    rawProfilePicture?.startsWith(ipfsPrefix2) ||
    rawProfilePicture?.startsWith(ipfsPrefix3);

  useEffect(() => {
    if (rawProfilePicture && checkIfProfilePictureIsIpfsAddress) {
      setProfilePicture('https://lens.infura-ipfs.io/ipfs/' + stripIpfsPrefix(rawProfilePicture));
    } else if (rawProfilePicture && !checkIfProfilePictureIsIpfsAddress) {
      setProfilePicture(rawProfilePicture);
    }
  }, [checkIfProfilePictureIsIpfsAddress, rawProfilePicture]);

  return { profilePicture };
};
