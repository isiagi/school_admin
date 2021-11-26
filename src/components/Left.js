import React, {useContext} from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styled, alpha } from '@mui/material/styles';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {AppContext} from './Context'

const ContainerWrapper = styled(Container)(({ theme }) => ({
    height: '100vh',
    color: 'white',
    paddingTop: theme.spacing(14),
    backgroundColor: 'blue',
    cursor: 'pointer',
    position: 'sticky',
    top: 0,
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    '&:hover': {
        backgroundColor: 'rgba(70, 9, 157, 1)',
        padding: '0.3rem',
        width: 'inherit',
      },
}))

function Left() {
    // eslint-disable-next-line no-unused-vars
    const [view, setView] = useContext(AppContext)
  return (
  <ContainerWrapper>
  <IconWrapper onClick={() => (setView('admin'))}>
        <GroupIcon />
        <Typography>Admin</Typography>
    </IconWrapper>
  <IconWrapper onClick={() => (setView('student'))}>
        <GroupIcon />
        <Typography>Students</Typography>
    </IconWrapper>
    <IconWrapper onClick={() => (setView('teacher'))}>
        <EmojiPeopleIcon />
        <Typography>Teachers</Typography>
    </IconWrapper>
    <IconWrapper onClick={() => (setView('parent'))}>
        <PeopleAltIcon />
        <Typography>Parents</Typography>
    </IconWrapper>
    <IconWrapper onClick={() => (setView('event'))}>
        <PeopleAltIcon />
        <Typography>Events</Typography>
    </IconWrapper>
    <IconWrapper onClick={() => (setView('time'))}>
        <PeopleAltIcon />
        <Typography>Time Table</Typography>
    </IconWrapper>
  </ContainerWrapper>
  );
}

export default Left;
