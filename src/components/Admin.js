import React from 'react';
import { Box, styled } from '@mui/system';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MoneyIcon from '@mui/icons-material/Money';
import { Container, Typography } from '@mui/material';
import { Bar, Pie, } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

const ContainerWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
}));

const BoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: 'rgba(29, 26, 229, 0.8)',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  borderRadius: '5px',
  color: 'white',
  flexWrap: 'wrap',
}));

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const state = {
  labels: ['First Term', 'Second Term', 'Third Term'],
  datasets: [
    {
      label: 'Payment Collection',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80],
    },
    {
      label: 'Fees Collection',
      backgroundColor: 'red',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [30, 20, 10],
    },
  ],
};

export const data = {
  labels: ['Female', 'Male'],
  datasets: [
    {
      label: 'Gender',
      data: [60, 40 ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

function Admin() {
  return (
    <>
      <ContainerWrapper>
        <BoxWrapper>
          <GroupIcon style={{fontSize: '55px'}}/>
          <Box style={{ marginLeft: '10px' }}>
            <Typography variant="h6">Students</Typography>
            <Typography variant="h6">20000</Typography>
          </Box>
        </BoxWrapper>
        <BoxWrapper>
          <EmojiPeopleIcon style={{fontSize: '55px'}}/>
          <Box style={{ marginLeft: '10px' }}>
            <Typography variant="h6">Teachers</Typography>
            <Typography variant="h6">20000</Typography>
          </Box>
        </BoxWrapper>
        <BoxWrapper>
          <PeopleAltIcon style={{fontSize: '55px'}}/>
          <Box style={{ marginLeft: '10px' }}>
            <Typography variant="h6">Parents</Typography>
            <Typography variant="h6">20000</Typography>
          </Box>
        </BoxWrapper>
        <BoxWrapper>
          <MoneyIcon style={{fontSize: '55px'}}/>
          <Box style={{ marginLeft: '10px' }}>
            <Typography variant="h6">Earning</Typography>
            <Typography variant="h6">20000</Typography>
          </Box>
        </BoxWrapper>
      </ContainerWrapper>
      <Container>
      <Box style={{ display: 'flex', alignItems: 'center', marginTop: '40px', justifyContent: 'space-around' }}>
        <div style={{ width: '60%' }}>
          <Bar data={state} options={options} />
        </div>
        <div style={{ width: '28%' }}>
          <Pie data={data} />
        </div>
      </Box>
      </Container>
      <ContainerWrapper>
        <BoxWrapper>
          <FacebookIcon style={{fontSize: '55px'}}/>
          <Box style={{ marginLeft: '10px' }}>
            <Typography variant="h6">Facebook</Typography>
            <Typography variant="h6">20000</Typography>
          </Box>
        </BoxWrapper>
        <BoxWrapper>
          <TwitterIcon style={{fontSize: '55px'}}/>
          <Box style={{ marginLeft: '10px' }}>
            <Typography variant="h6">Twitter</Typography>
            <Typography variant="h6">20000</Typography>
          </Box>
        </BoxWrapper>
        <BoxWrapper>
          <InstagramIcon style={{fontSize: '55px'}}/>
          <Box style={{ marginLeft: '10px' }}>
            <Typography variant="h6">Instagram</Typography>
            <Typography variant="h6">20000</Typography>
          </Box>
        </BoxWrapper>
        <BoxWrapper>
          <LinkedInIcon style={{fontSize: '55px'}}/>
          <Box style={{ marginLeft: '10px' }}>
            <Typography variant="h6">Linkedin</Typography>
            <Typography variant="h6">20000</Typography>
          </Box>
        </BoxWrapper>
      </ContainerWrapper>
    </>
  );
}

export default Admin;
