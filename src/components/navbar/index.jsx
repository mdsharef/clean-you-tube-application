import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import useError from "../../hooks/useError";
import ErrorMsg from "../ui/ErrorMsg";
import AddPlaylistBtn from "./AddPlaylistBtn";
import MobileAppbar from "./MobileAppbar";


/**
 * Navbar Component to display the header. This component contains logo and addPlaylist button.
 * @component
 * @example
 * return (
 *  <Navbar />
 * )
 * @returns <Navbar />
 */
const Navbar = () => {
    const { snack, handleSnackClose, handleSnackOpen } = useError()

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
            <AppBar position="fixed" color="default" sx={{ py: 1 }}>
                    <Toolbar>
                        {isMatch ? (
                            <MobileAppbar handleSnackOpen={handleSnackOpen} />
                        ) : (
                            <>
                                <LeftPart />
                                <RightPart />
                                <AddPlaylistBtn handleSnackOpen={handleSnackOpen} />
                            </>
                        )}
                    </Toolbar>
            </AppBar>
            <ErrorMsg 
                open={snack.open}
                handleClose={handleSnackClose}
                message={snack.message}
                severity={snack.severity}
            />
        </Box>
    )
};

export default Navbar;