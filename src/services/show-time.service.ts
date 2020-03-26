/**
 *
 * @param date
 * @param setDate
 */
export const showPickedTime = (date: Date, dateIsNow: boolean) => {
  if (dateIsNow) {
    return "NOW";
  }

  return `AT ${date.getHours()}:${date.getMinutes()}`;
};
