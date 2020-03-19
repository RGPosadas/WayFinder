import { Range } from "../types/main";

/**
 * Check if a given number falls between a range.
 *
 * @param range Range to check for
 * @param num Number to check for
 */
export const inRange = (range: Range, num: number) => {
  return num >= range.min && num <= range.max;
};
