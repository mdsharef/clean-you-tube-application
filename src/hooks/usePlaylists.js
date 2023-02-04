import { useEffect, useState } from "react";
import getPlaylist from "../api";
import storage from "../utils/Storage";

/**
 * usePlaylists hooks module
 * @module usePlaylists
 * @example
 * import usePlaylists form '[filelocation]'
 */

const STORAGE_KEY = 'cy__playlist__key';

const INIT_STATE = {
    playlists: {},
    recentPlaylists: [],
    favouritePlaylists: [],
}

/**
 * usePlaylists hooks
 * @returns {{
 *      playlists, 
 *      favouritePlaylists, 
 *      recentPlaylists, 
 *      error, 
 *      loading, 
 *      addPlaylist,
 *      addToFavouritePlaylists, 
 *      addToRecentPlaylists,
 * }}
 * @example
 * usePlaylists();
 * return({ 
 *  playlists: state.playlists,
 * favouritePlaylists: getPlaylistsByIds(state.favouritePlaylists),
 * recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
 * addPlaylist,
 * addToFavouritePlaylists,
 * addToRecentPlaylists,
 * })
 */
const usePlaylists = () => {
    /**
     * useState hook for containing all playlists
     */
    const [state, setState] = useState({...INIT_STATE});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const data = storage.get(STORAGE_KEY);

        if(data) {
            setState({...data});
        }
    }, []);

    useEffect(() => {
        if(state !== INIT_STATE) {
            storage.save(STORAGE_KEY, state);
        }
    }, [state])

    /**
     * addPlaylist function to fetch videos of provided playlistID and add them to a new playlist to the state
     * @param {string} playlistID playlistID to add the result, getting through call getPlaylist function, to the state
     * @example
     * addPlaylist(playlistID)
     */
    const addPlaylist = async (playlistID, refresh=false) => {
        /**
         * Cheak Whether the playlist is already existed and it's not the refresh request
         */
        if(state.playlists[playlistID] && !refresh) {
            return;
        }

        setLoading(true);

        try {
            const playlist = await getPlaylist(playlistID);
            setState((prev) => ({
                ...prev,
                playlists: {
                    ...prev.playlists,
                    [playlistID]: playlist
                }
            })); 
            setError('');
        } catch (e) {
            setError(e.response?.data?.error?.message || 'Something went wrong!')
        } finally {
            setLoading(false);
        }
    };

    /**
     * addToFavouritePlaylists function to add a playlistID to favourite playlists
     * @param {string} playlistID playlistID which will be stored in favourite playlists
     */
    const addToFavouritePlaylists = (playlistID) => {
        setState(prev => ({
            ...prev,
            favouritePlaylists: [...prev.favouritePlaylists, playlistID]
        }))
    };

    /**
     * addToRecentPlaylists function to add a playlistID to recent playlists
     * @param {string} playlistID playlistID which will be stored in recent playlists
     */
    const addToRecentPlaylists = (playlistID) => {
        setState(prev => ({
            ...prev,
            recentPlaylists: [...prev.recentPlaylists, playlistID]
        }))
    };

    /**
     * getPlaylistsByIds function to get playlists for provided ids
     * @param {Array} ids Array of ids either favourite or recent playlists
     * @returns {Array} Array of objects of playlists   
     */
    const getPlaylistsByIds = (ids=[]) => {
        return ids.map(id => state.playlists[id])
    }

    return {
        playlists: state.playlists,
        favouritePlaylists: getPlaylistsByIds(state.favouritePlaylists),
        recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
        error,
        loading,
        addPlaylist,
        addToFavouritePlaylists,
        addToRecentPlaylists,
    }
}

export default usePlaylists;