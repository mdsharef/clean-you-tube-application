import { ButtonGroup, Stack } from "@mui/material";
import { FaHeart, FaHistory } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import ButtonLink from "../ui/ButtonLink";

const RightPart = () => {
    return (
        <Stack>
            <ButtonGroup 
                variant="text" 
                aria-label="text button group" 
                sx={{mr: '25px'}}
            >
                <ButtonLink routeLink={`/playlists/lists`} text={'All Playlists'}>
                    <MdDashboard style={{fontSize: '16px', color: '#333'}} />
                </ButtonLink>
                <ButtonLink routeLink={`/favourites/lists`} text={'Favourites'}>
                    <FaHeart style={{fontSize: '16px', color: '#333'}} />
                </ButtonLink>
                <ButtonLink routeLink={`/recents/lists`} text={'Recents'}>
                    <FaHistory style={{fontSize: '16px', color: '#333'}} />
                </ButtonLink>
            </ButtonGroup>
        </Stack>
    )
};

export default RightPart;