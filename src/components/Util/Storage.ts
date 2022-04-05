export const store = {
  getJson: <T extends Record<string, unknown>>(key: string): T => JSON.parse(localStorage.getItem(key)),
  remove: (key: string) => localStorage.removeItem(key),
  setJson: (key: string, data: Record<string, any>) => localStorage.setItem(key, JSON.stringify(data))
};