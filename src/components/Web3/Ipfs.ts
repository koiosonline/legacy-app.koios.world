import { create } from 'ipfs-http-client';

const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  apiPath: '/api/v0',
});

const ipfsPrefix1 = 'https://ipfs.io/ipfs/';
const ipfsPrefix2 = 'ipfs://ipfs/';
const ipfsPrefix3 = 'ipfs://';

export const stripIpfsPrefix = (cid: string) => {
  if (cid.includes(ipfsPrefix1)) {
    return cid.replace(ipfsPrefix1, '');
  }
  if (cid.includes(ipfsPrefix2)) {
    return cid.replace(ipfsPrefix2, '');
  }
  if (cid.includes(ipfsPrefix3)) {
    return cid.replace(ipfsPrefix3, '');
  } else return cid;
};

export const getCidImage = async (hash: string) => {
  if (hash) {
    try {
      const cid = stripIpfsPrefix(hash);
      const ui8arr = [];

      for await (const result of ipfs.cat(cid)) {
        ui8arr.push(result);
      }
      const blob = new Blob(ui8arr, { type: 'image/jpeg' });
      const url = URL.createObjectURL(blob);
      return url;
    } catch (e) {
      console.log(e);
    }
  }
  return undefined;
};

export const fetchJson = async (hash: string) => {
  if (hash) {
    try {
      let str = '';
      hash = stripIpfsPrefix(hash);

      for await (const result of ipfs.cat(hash)) {
        str += String.fromCharCode.apply(null, result);
      }

      if (str === '') {
        return undefined;
      }

      const json = JSON.parse(str);
      return json;
    } catch (e) {
      console.log(e);
    }
  }
  return undefined;
};
