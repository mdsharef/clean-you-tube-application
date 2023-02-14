import { createStore } from "easy-peasy";
import favouriteModel from "./reducerModel/favourites";
import notesModel from "./reducerModel/notes";
import playlistModel from "./reducerModel/playlists";
import recentsModel from "./reducerModel/recents";

const store = createStore({
    playlists: playlistModel,
    favourites: favouriteModel,
    recents: recentsModel,
    notes: notesModel,
});

export default store;