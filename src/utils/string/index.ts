export const convertTagToName = (tag: string) => {
    return String(tag).split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}