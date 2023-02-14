import { Container, Divider, Typography } from "@mui/material";
import ShowPlaylists from "../../components/shared/ShowPlaylists";
import usePlaylists from "../../hooks/usePlaylists";

const Favourites = () => {
    const { favourites } = usePlaylists();

    return (
        <Container maxWidth='lg' sx={{my: 12}}>
            <Typography variant='h5'>Favourite Playlists</Typography>
            <Divider />
            <ShowPlaylists playlists={favourites} />
        </Container>
    )
};

export default Favourites;