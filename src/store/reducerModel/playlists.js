import { action, persist, thunk } from "easy-peasy";
import getPlaylist from "../../api";

const playlistModel = persist({
    data: {},
    error: '',
    isLoading: false,
    setLoading: action((state, payload) => {
        state.isLoading = payload;
    }),
    setError: action((state, payload) => {
        state.error = payload;
    }),
    addPlaylist: action((state, payload) => {
        state.data[payload.playlistID] = payload;
        // state = {
        //     ...state,
        //     data: {
        //         ...state.data,
        //         [payload.playlistId]: payload,
        //     }
        // }
    }),
    savePlaylist: thunk(async (actions, payload, helpers) => {

        if(helpers.getState().data[payload.playlistID] && !payload.refresh) {
            return;
        }
        
        actions.setLoading(true);

        try {
            const data = await getPlaylist(payload.playlistID);
            actions.addPlaylist(data);
            actions.setError('');
        } catch (e) {
            actions.setError(e.response?.data?.error?.message || 'Something went wrong!')
        } finally {
            actions.setLoading(false);
        }
    }),
});

export default playlistModel;