import { action, persist } from "easy-peasy";

const recentsModel = persist({
    items: [],
    addRecents: action((state, playlistID) => {
        if(state.items.includes(playlistID)) {
            return;
        }
        state.items.unshift(playlistID);
        state.items = state.items.slice(0, 8);
    }),
});

export default recentsModel;