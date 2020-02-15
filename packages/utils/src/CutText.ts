import { splitText } from './SplitText';

/**
 * Split a text by its latest space character in a range from the character 0 to the selected one.
 * @param str The text to split.
 * @param length The length of the desired string.
 */
export function cutText(str: string, length: number) {
  if (str.length < length) return str;
  const cut = splitText(str, length - 3);
  if (cut.length < length - 3) return `${cut}...`;

  return `${cut.slice(0, length - 3)}...`;
}
