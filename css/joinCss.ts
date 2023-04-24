export const joinCss = (
    classes: (string | null | undefined)[]
) =>
    classes.filter(Boolean).join(' ');