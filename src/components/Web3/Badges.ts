import { selectedAccount } from "./Web3--old";
import { getCidImage, fetchJson } from "./Ipfs";

const GetBadges = async () => {
  const query = `
    {
      users (first: 1000){
        id
        tokens {
          id
          contentURI
        }
      }
    }
  `;
  const URL = "https://api.thegraph.com/subgraphs/name/corwin96/koios-badges";
  const body = JSON.stringify({ query: query });
  const res = await fetch(URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: body,
  });
  const json = await res.json();
  return json;
};

const BadgesJson = async () => {
  const resultArray: any = [];
  const badgeHolders = await GetBadges();
  for (const user of badgeHolders.data.users) {
    if (selectedAccount) {
      if (selectedAccount.toLowerCase() === user.id) {
        let limit = user.tokens.length;
        if (user.tokens.length > 3) limit = 3;
        for (let i = 0; i < limit; i++) {
          const entry = await fetchJson(user.tokens[i].contentURI);
          resultArray.push(entry);
        }
      }
    }
  }
  return resultArray;
};

export const ShowBadges = async () => {
  const badgesJson = await BadgesJson();
  const resultArray: any = [];
  for (const badges of badgesJson) {
    const entry = { name: badges.name, image: await getCidImage(badges.image) };
    resultArray.push(entry);
  }
  return resultArray;
};
