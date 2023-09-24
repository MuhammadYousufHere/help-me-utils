/**
 *
 * @param str {string} - a valid string that you want to transform as title case.
 * @returns it returns the provided string as title cased.
 *  * turns the string into a title case magically
 * @example <caption>Example usage of toTitle.</caption>
 * toTitle('let us see');
 * @returns {string} Returns the string as `Let Us See`.
 * */

const toTitle = (str) => {
  if (typeof string !== 'string')
    throw new Error('toTile only accepts a string as an argument.')
  return String(string)
    .split(' ')
    .map((char) => char.charAt(0).toUpperCase() + char.substring(1))
    .join(' ')
}

export const String = { toTitle }
