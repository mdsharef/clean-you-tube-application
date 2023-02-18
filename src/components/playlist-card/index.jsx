import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaRegHeart, FaHeart, FaRegPlayCircle } from 'react-icons/fa';
import { MdDelete, MdExpandMore } from 'react-icons/md';
import usePlaylists from '../../hooks/usePlaylists';
import { CardHeader, Collapse, IconButton } from '@mui/material';
import { useState } from 'react';
import ExpandMore from '../shared/ExpandMore';

/**
 * PlaylistCard Component to show individual playlist
 * @component
 * @example
 * return (
 *  <PlaylistCard playlistThumbnail={playlistThumbnail} channelTitle={channelTitle} playlistTitle={playlistTitle} />
 * )
 * @param {{playlistThumbnail: object, channelTitle: string, playlistTitle: string}} params [options]
 * @returns <PlaylistCard options={params}/>
 */
const PlaylistCard = ({ playlistID, playlist, remove=false }) => {

  const { isLoved, favouriteToggle, removePlaylist, addRecent } = usePlaylists(playlistID);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    const isConfirmed = confirm('Press okk to delete the playlist');
    if(!isConfirmed) return;

    removePlaylist(playlistID);
  }

  return (
    <Card sx={{mt: 1}}>
      <CardMedia
        component="img"
        height= "195"
        image={playlist.playlistThumbnail.url}
        alt={playlist.playlistTitle}
      />
      <CardHeader 
        action={
          <IconButton 
            onClick={() => favouriteToggle(playlistID)}
            color='primary' 
            sx={{alignSelf: 'center'}}
          >
            {isLoved ? <FaHeart /> : <FaRegHeart />}
          </IconButton>
        }
        title={
          <Typography 
            variant="h6" 
            color='text.primary'
            sx={{fontSize: '16px'}}
          >
            {playlist.playlistTitle.length > 32 ? `${playlist.playlistTitle.substring(0, 32)}...` : playlist.playlistTitle}
          </Typography>
        }
        subheader={
          <Typography 
            variant='body1' 
            color="text.secondary"
            sx={{fontSize: '14px', letterSpacing: 1.5, mt: '3px', cursor: 'pointer'}}
          >
            {playlist.channelTitle}
          </Typography>
        }
      />
      <CardContent sx={{ pb: 0, pt: 0}}>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant="body2" color='text.primary'>
            Details of the playlist
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <MdExpandMore />
          </ExpandMore>
        </Stack>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant='subtitle2' color='text.primary'>
            {playlist.playlistTitle}
          </Typography>
          <Typography 
            variant='body1' 
            color="text.secondary"
            sx={{fontSize: '14px', letterSpacing: 1.5, mt: '3px', cursor: 'pointer'}}
          >
            {playlist.channelTitle}
          </Typography>
          <Typography variant='body1'>
            {playlist.playlistDescription}
          </Typography>
        </Collapse>
      </CardContent>
      <CardActions sx={{justifyContent: 'space-between'}}>
        <Button onClick={() => addRecent(playlistID)} component={Link} to={`/player/${playlistID}`} >
          <Stack direction='row' display='flex' spacing={0.5} alignItems='center'>
            <FaRegPlayCircle />
            <Typography variant='body2' color={'primary'} fontWeight={600}>
              Start Tutorial
            </Typography>
          </Stack>
        </Button>
        {remove && (
          <IconButton 
            color='warning'
            onClick={handleDelete}
          >
            <MdDelete />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default PlaylistCard;