/**
 * Helper object containing methods to interact with localStorage more easily.
 */
export const store = {
  /**
   * 
   * @param key name of the localStorage item
   * @returns a JSON parsed from the string within the localStorage key provided or undefined.
   */
  getJson: <T extends Record<string, unknown>>(key: string): T => JSON.parse(localStorage.getItem(key)),
  remove: (key: string) => localStorage.removeItem(key),
  setJson: (key: string, data: Record<string, any>) => localStorage.setItem(key, JSON.stringify(data))
};