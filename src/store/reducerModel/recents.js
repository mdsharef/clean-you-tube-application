import { action, persist } from "easy-peasy";

const recentsModel = persist({
    items: [],
    error: '',
    vanishError: action((state, _payload) => {
        state.error = '';
    }),
    addRecent: action((state, playlistID) => {
        if(state.items.includes(playlistID)) {
            state.error = 'Playlist arleady added!';
            return;
        }
        state.items.unshift(playlistID);
        state.items = state.items.slice(0, 8);
        state.error = '';
    }),
    removeRecent: action((state, playlistID) => {
        state.items = state.items.filter(item => item !== playlistID);
    })
}, {
    storage: 'localStorage',
    allow: ['items']
});

export default recentsModel;