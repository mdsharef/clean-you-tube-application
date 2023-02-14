import { Grid } from "@mui/material";
import Favourite from "../../components/home/favourites";
import AllPlaylists from "../../components/home/playlists";
import Recent from "../../components/home/recents";

const Home = () => {
    return(
        <Grid container mt={10} spacing={2}>
            <Grid item xs={12}>
                <Favourite />
            </Grid>
            <Grid item xs={12}>
                <Recent />
            </Grid>
            <Grid item xs={12}>
                <AllPlaylists />
            </Grid>
        </Grid>
    )
};

export default Home;