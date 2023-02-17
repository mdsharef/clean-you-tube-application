import { Alert, Snackbar } from "@mui/material";
// import generateID from "../../utils/generateId";

// const getID = generateID('errors')

const ErrorMsg = ({ open, handleClose, severity, message }) => {
    return (
        <Snackbar
            // key={getID.next().value}
            open={open}
            autoHideDuration={6000}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={severity} sx={{width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>
    )
};

export default ErrorMsg;