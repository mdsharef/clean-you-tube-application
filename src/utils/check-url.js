const checkURL = urlStr => {
    try {
        return Boolean(new URL(urlStr));
    } catch {
        return false;
    }
};

export default checkURL;