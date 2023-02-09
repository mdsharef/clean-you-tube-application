import { combineReducers, createStore } from "redux";
import favouriteReducer from "./reducers/favouriteReducer";
import playlistsReducer from "./reducers/playlistsReducer";
import recentsReducer from "./reducers/recentsReducer";

const store = createStore(combineReducers({
    playlists: playlistsReducer,
    favourites: favouriteReducer,
    recents: recentsReducer
}));

export default store;