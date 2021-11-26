import React, { useState } from 'react';
import { Button, Container, Modal } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const ContainerWrapper = styled(Container)(({ theme }) => ({
  width: 500,
  height: 550,
  backgroundColor: 'white',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    height: '100vh',
  },
}));

const TextField1 = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

function Moda({name}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Add {name}</Button>
      <Modal open={open}>
        {/* <h1>Hey</h1> */}
        <ContainerWrapper>
        <Box component="form" autoComplete="off" style={{ padding: '1rem' }}>
            <TextField1>
              <TextField
                id="standard-basic"
                label="First Name"
                variant="standard"
                size="small"
                style={{ width: '100%' }}
              />
            </TextField1>

            <TextField1>
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
                size="small"
                style={{ width: '100%' }}
              />
            </TextField1>

            <TextField1>
              <TextField
                id="standard-basic"
                label="sex"
                variant="standard"
                size="small"
                style={{ width: '100%' }}
              />
            </TextField1>
            
              <Button
                size="small"
                color="primary"
                variant="outlined"
                style={{ marginRight: 20 }}
                
              >
                Create
              </Button>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
          </Box>
            </ContainerWrapper>
      </Modal>
    </>
  );
}

export default Moda;
