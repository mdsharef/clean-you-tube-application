import { action, persist } from "easy-peasy";

const favouriteModel = persist({
    items: [],
    addFavourite: action((state, playlistID) => {
        state.items.push(playlistID);
    }),
    removeFavourite: action((state, playlistID) => {
        state.items = state.items.filter(item => item !== playlistID);
    }),
}, {
    storage: 'localStorage',
    allow: ['items']
});

export default favouriteModel;