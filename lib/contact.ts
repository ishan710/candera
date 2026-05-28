/** Opens the user's email client with a pre-filled subject. No server required. */
export const GET_IN_TOUCH_MAILTO =
  'mailto:ishan710@gmail.com?subject=' + encodeURIComponent('Candera — Get in touch');

export function bookServiceMailto(serviceTitle: string): string {
  return (
    'mailto:ishan710@gmail.com?subject=' + encodeURIComponent(`Candera — ${serviceTitle}`)
  );
}
