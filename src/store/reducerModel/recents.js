import { action, persist } from "easy-peasy";

const recentsModel = persist({
    items: [],
    error: '',
    vanishError: action((state, _payload) => {
        state.error = '';
    }),
    addRecents: action((state, playlistID) => {
        if(state.items.includes(playlistID)) {
            state.error = 'Playlist arleady added!';
            return;
        }
        state.items.unshift(playlistID);
        state.items = state.items.slice(0, 8);
        state.error = '';
    }),
}, {
    storage: 'localStorage',
    allow: ['items']
});

export default recentsModel;