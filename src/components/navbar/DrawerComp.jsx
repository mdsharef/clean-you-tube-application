import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { FaHeart, FaHistory } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Box, Divider, Drawer, Link, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import AddPlaylistBtn from './AddPlaylistBtn';
import SearchInput from './SearchInput';

const items = [
    {
        id: 1231,
        route: '/playlists/lists',
        icon: <MdDashboard />,
        text: 'All Playlists'
    },
    {
        id: 1232,
        route: 'favourites/lists',
        icon: <FaHeart />,
        text: 'Favourites'
    },
    {
        id: 1233,
        route: 'recents/lists',
        icon: <FaHistory />,
        text: 'Recents'
    }
]

const LinkItem = ({ route, icon, text, handleClose }) => {
    return (
        <Link 
            component={RouterLink} 
            to={route}
            sx={{textDecoration: 'none', color: 'text.primary', cursor: 'pointer'}}
            onClick={handleClose}
        >
            <ListItemButton>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </Link>
    )
}

const DrawerComp = ({open, handleClose, handleSnackOpen}) => {
    return (
        <React.Fragment>
            <Drawer open={open} anchor='left' onClose={handleClose}>
                <Box pt={5} px={1} maxWidth='70%'>
                    <SearchInput />
                    <Box mt={2}/>
                    <AddPlaylistBtn handleSnackOpen={handleSnackOpen}/>
                    <Divider sx={{marginTop: '16px'}} />
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Routes of the application
                            </ListSubheader>
                        }
                    >
                        {items.map(item => (
                            <LinkItem 
                                key={item.id} 
                                route={item.route} 
                                icon={item.icon} 
                                text={item.text} 
                                handleClose={handleClose} 
                            />
                        ))}
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    )
};

export default DrawerComp;