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

    const playlistItemsArr = Object.values(playlistItems);
    const favouriteItemsArr = favouriteItems.map(item => playlistItems[item]);
    const recentItemsArr = recentItems.map(item => playlistItems[item]);

    return {
        playlists: playlistItemsArr,
        playlistsForHome: playlistItemsArr.reverse().slice(0, 3),
        favourites: favouriteItemsArr,
        favouritesForHome: favouriteItemsArr.reverse().slice(0, 3),
        recents: recentItemsArr,
        recentsForHome: recentItemsArr.slice(0, 3),
        favouriteToggle,
        isLoved,
        removePlaylist,
        addRecent: recents.addRecent,
    }
}

export default usePlaylists;