import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect, useState } from "react";

const INITERROROBJ = {
    open: false,
    message: '',
    severity: 'error',
}

const useNoteError = () => {
    const { error } = useStoreState(state => state.notes);
    const { vanishError } = useStoreActions(actions => actions.notes);
    const [snack, setSnack] = useState({...INITERROROBJ});

    useEffect(() => {
        setSnack({
            open: Boolean(error),
            message: error,
            severity: 'error'
        })
    }, [error]);

    const handleSnackClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        vanishError();
        setSnack({...INITERROROBJ});
    }

    const handleSnackOpen = (snackObj) => {
        setSnack(snackObj);
    }

    return {
        snack,
        handleSnackOpen,
        handleSnackClose,
    }
}

export default useNoteError;