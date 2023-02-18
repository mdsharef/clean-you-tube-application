import { Divider, Grid } from "@mui/material";
import BottomSide from "./BottomSide";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Footer = () => {
    return (
        <Grid container mt={5}>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item container xs={12} m={5} alignItems='stretch'>
                <Grid item xs={12} md={6}>
                    <LeftSide />
                </Grid>
                <Grid item xs={12} md={6}>
                    <RightSide />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <BottomSide />
            </Grid>
        </Grid>
    )
};

export default Footer;