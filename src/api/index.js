import axios from "axios";

/**
 * getPlaylist function module
 * @module getPlaylist
 * @example
 * import getPlaylist from "[filelocation]";
 */

/**
 * getPlaylist function to fetch the videos of provided playlist id
 * @param {string} playlistID playlist id to fetch the videos of that playlist using this id
 * @param {string} pageToken pageToken to fetch others videos expect 50 videos fetched at the first call
 * @param {Array} result result to contain the result after calling the function
 * @returns {Array} result containing the videos of the playlist
 * @example
 * getPlaylist(playlist)
*/
const getPlaylist = async (playlistID, pageToken='', result=[]) => {
    /**
     * api_key for the youtube v3 api service.
     */
    const api_key = import.meta.env.VITE_YOUTUBE_API_KEY;

    /**
     * URL for fetching the videos of provided playlist id
     */
    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistID}&pageToken=${pageToken}`;

    const {data} = await axios.get(URL);

    result = [...result, ...data.items];

    if(data.nextPageToken) {
        result = getPlaylist(playlistID, data.nextPageToken, result);
    }

    return result;
}

export default getPlaylist;