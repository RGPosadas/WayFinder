import { Range } from "../types/main";

export const inRange = (range: Range, num: number) => {
  return num >= range.min && num <= range.max;
};
