type DecentralizedImageObject = {
  height: number;
  mimeType: string;
  size: number;
  src: string;
  width: number;
};

export type DecentralizedProfile = {
  background: {
    alternatives: [];
    original: DecentralizedImageObject;
  };
  description: string;
  emoji: string;
  homeLocation: string;
  image: {
    alternatives: DecentralizedImageObject[];
    original: DecentralizedImageObject;
  };
  name: string;
  residenceCountry: string;
  url: string;
};
