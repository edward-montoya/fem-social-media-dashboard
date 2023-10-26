export function getIcon(icon) {
    return new URL(`../../assets/images/icon-${icon}.svg`, import.meta.url).href
}

export function getIndicator(views) {
    const dir = views < 0 ? 'down' : 'up';
    return new URL(`../../assets/images/icon-${dir}.svg`, import.meta.url).href
}

