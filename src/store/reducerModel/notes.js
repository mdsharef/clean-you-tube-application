import { action, persist } from "easy-peasy";
import generateID from "../../utils/generateID";


const getID = generateID('notes');

const notesModel = persist({
    data: {},
    createNote: action((state, payload) => {
        let noteId = getID.next().value;
        state.data[`${payload.videoId}|${noteId}`] = {
            id: noteId,
            videoId: payload.videoId,
            text: payload.text,
            videoTime: payload.videoTime
        }
    })
}, {
    storage: 'localStorage',
    allow: ['data']
});

export default notesModel;