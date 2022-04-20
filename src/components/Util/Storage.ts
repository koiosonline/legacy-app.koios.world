/**
 * Helper object containing methods to interact with localStorage more easily.
 */
export const store = {
  /**
   * Fetches JSON from the browsers local storage.
   * @param key name of the localStorage item
   * @returns a JSON parsed from the string within the localStorage key provided or undefined.
   */
  getJson: <T extends Record<string, unknown>>(key: string): T | undefined => JSON.parse(localStorage.getItem(key)),
  /**
   * Removes an item from the browsers local storage.
   * @param key the key of the item to be removed
   */
  remove: (key: string) => localStorage.removeItem(key),
  /**
   * Stores JSON inside the browsers local storage.
   * @param key the key of the item which can be used to fetch later
   * @param data the JSON data to be stored
   */
  setJson: (key: string, data: Record<string, any>) => localStorage.setItem(key, JSON.stringify(data))
};