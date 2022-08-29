import { gql } from '@apollo/client';

export const LENS_GET_PROFILE_IMAGE = (address: string) => {
  return gql`
    query DefaultProfile {
      defaultProfile(request: { ethereumAddress: "${address}" }) {
        picture {
      ... on MediaSet {
        original {
          url
        }
      }
    }
      }
    }
  `;
};
