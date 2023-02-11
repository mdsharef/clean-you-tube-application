import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";

const usePlaylists = (playlistID=null) => {
    const {
        playlists: {data: playlistItems}, 
        favourites: {items : favouriteItems}, 
        recents: {items: recentItems}
    } = useStoreState(state => state);

    const { playlists, favourites, recents } = useStoreActions(actions => actions);

    const [isLoved, setIsLoved] = useState(favouriteItems.includes(playlistID));

    const favouriteToggle = (playlistID) => {
        if(isLoved) {
        setIsLoved(false);
        favourites.removeFavourite(playlistID);
        } else {
        setIsLoved(true);
        favourites.addFavourite(playlistID);
        }
    }

    const removePlaylist = (playlistID) => {
        favourites.removeFavourite(playlistID);
        recents.removeRecent(playlistID);
        playlists.deletePlaylist(playlistID);
    }

    return {
        playlists: Object.values(playlistItems),
        playlistsForHome: Object.values(playlistItems).slice(0, 3),
        favourites: favouriteItems.map(item => playlistItems[item]),
        favouritesForHome: favouriteItems.map(item => playlistItems[item]).slice(0, 3),
        recents: recentItems.map(item => playlistItems[item]),
        recentsForHome: recentItems.map(item => playlistItems[item]).slice(0, 3),
        favouriteToggle,
        isLoved,
        removePlaylist,
        addRecent: recents.addRecent
    }
}

export default usePlaylists;