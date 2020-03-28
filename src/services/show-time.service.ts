/**
 *Converts a time to a string by using the current or specified locale.
 * @param date
 * @param dateIsNow
 */
export const showPickedTime = (date: Date, dateIsNow: boolean) => {
  if (dateIsNow) {
    return "NOW";
  }

  return `AT ${date
    .toLocaleTimeString()
    .substring(0, date.toLocaleTimeString().lastIndexOf(":"))}`;
};
