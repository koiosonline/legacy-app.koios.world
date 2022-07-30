export const GetTokenHoldersJSON = async () => {
  const query = `
        {
          users(orderBy:balance, orderDirection:desc) {
            id
            address
            balance
            erc20Symbol
          }
        } 
          `;
  const URL = "https://api.thegraph.com/subgraphs/name/koiosonline/titan-token-polygon";
  const body = JSON.stringify({ query: query });
  const res = await fetch(URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: body,
  });
  const json = await res.json();
  return json;
};
