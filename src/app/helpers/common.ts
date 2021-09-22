export const filterArr = (value: string, arr: Array<any>): Array<any> => {
  if (typeof value === 'string') {
    return arr.filter(a => a.name.toLowerCase().includes(value.trim().toLowerCase()));
  }
  return arr;
};