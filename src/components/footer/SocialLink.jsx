import generateID from '../../utils/generateId';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FaFacebookMessenger, FaTelegram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { IconButton, Stack } from "@mui/material";

const getID = generateID('socialLinks');

const socialLinks = [
    {
        id: getID.next().value,
        icon: <BsGithub />,
        link: 'https://www.github.com/mdsharef',
        title: 'Github - Visit the github account',
    },
    {
        id: getID.next().value,
        icon: <BsFacebook />,
        link: 'https://www.facebook.com/mdmuaz45',
        title: 'Facebook - Visit the facebook account',
    },
    {
        id: getID.next().value,
        icon: <FaFacebookMessenger />,
        link: 'https://m.me/mdmuaz45',
        title: 'Messenger - Connect to messenger'
    },
    {
        id: getID.next().value,
        icon: <FiMail />,
        link: 'mailto:mdsharef80@gmail.com',
        title: 'Gmail - Mail me here'
    },
    {
        id: getID.next().value,
        icon: <FaTelegram />,
        link: 'https://t.me/falco_universe',
        title: 'Telegram - Visit the link to connect me'
    }
];

const Icon = ({ icon, link, title }) => {
    return (
        <IconButton title={title} href={link} target="_blank" size='medium' >
            {icon}
        </IconButton>
    )
}

const SocialLink = () => {
    return (
        <Stack 
            direction='row' 
            justifyContent='center' 
            alignItems='center' 
            spacing={1}
            mt={2}
        >
            {socialLinks.map(sl => (
                <Icon key={sl.id} icon={sl.icon} link={sl.link} title={sl.title} />
            ))}
        </Stack>
    )
};

export default SocialLink;