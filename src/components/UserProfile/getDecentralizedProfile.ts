export const getDecentralizedProfile = async (accountAddress: string) => {
  try {
    // get IDX profile
    const profile = await window.idx.get(
      'basicProfile',
      `${accountAddress}@eip155:4`
    );
    return profile;
  } catch (e) {
    console.log(e);
    throw new Error('No IDX profile available');
  }
};
