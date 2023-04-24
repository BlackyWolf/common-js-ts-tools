/**
 * Joins together multiple strings into a single CSS class string.
 *
 * Good for separating conditional logic for classes into multiple lines more
 * easily.
 *
 * @example
 *
 * const css: string = joinCss(
 *     'w-full h-full p-8 transition duration-150',
 *     darkMode ? 'border-white text-white' : 'border-black text-black',
 *     showBorder ? 'border' : ''
 * );
 *
 * @param classes An array of strings which join into a single CSS class.
 *
 * @returns A single string of combined CSS classes.
 */
export const joinCss = (
    ...classes: (string | null | undefined)[]
) =>
    classes.filter(Boolean).join(' ');
