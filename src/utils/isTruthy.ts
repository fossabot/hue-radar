/**
 * Test if a given element (usually in an array) is truthy.
 *
 * @param {any} element - A given element.
 */
export default function isTruthy(element: unknown): boolean {
  return Boolean(element);
}
