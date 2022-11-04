export const openLinkInNewTab = (link, inNewTab) =>
    window.open(link, inNewTab ? '_blank' : '_self', 'noreferrer noopener');
