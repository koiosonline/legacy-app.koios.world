export const GetTokenHoldersJSON = async () => {
  const query = `
        {
          users(first: 1000, orderBy:balance, orderDirection:desc) {
            id
            address
            balance
            erc20Symbol
            contentURI
          }
        } 
          `
  const URL = 'https://api.thegraph.com/subgraphs/name/koiosonline/titantoken';
  let body = JSON.stringify({ query: query });
  var res = await fetch(URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: body
  })
  var json = await res.json()
  return json;
}
