import { createStore } from "easy-peasy";
import favouriteModel from "./reducerModel/favourites";
import playlistModel from "./reducerModel/playlists";
import recentsModel from "./reducerModel/recents";

const store = createStore({
    playlists: playlistModel,
    favourites: favouriteModel,
    recents: recentsModel,
});

export default store;