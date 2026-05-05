const getCroppedURL = (url: string) => {
    const target = "media/";
    const index = url.indexOf(target) + target.length;
    return url.substring(0, index) + "crop/600/400/" + url.substring(index);
}
export { getCroppedURL };