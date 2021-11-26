import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Container } from '@mui/material';
// table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(subject, teacher, From, To, Room) {
  return { subject, teacher, From, To, Room };
}

const rows = [
  createData('Mr.John', 'Biolggy', '9:00', '10:00', 'Amule'),
  createData('Mrs.Doe', 'Physics', '10:00', '11:00', 'Chem lab'),
  createData('Mr.Smith', 'Maths', '11:00', '12:00', 'Design Hub'),
  createData('Mrs.Faridah', 'Economics', '12:00', '1:00', 'Block 1'),
  createData('Mrs.Hanifah', 'History', '1:00', '2:00', 'Main Building'),
];

function Manage() {
  const [Fullname, setFullName] = useState({
    age: '',
    stream: '',
    subject: '',
    teacher: '',
    to: '',
    from: '',
    room: '',
  });
  const [alignment, setAlignment] = useState('');

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setFullName((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  return (
    <div style={{ marginTop: '90px' }}>
      <div>
        <Container>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel>Class</InputLabel>
            <Select
              value={Fullname.age}
              label="Age"
              name="age"
              onChange={handleChange}
            >
              <MenuItem value={1}>S1</MenuItem>
              <MenuItem value={2}>S2</MenuItem>
              <MenuItem value={3}>S3</MenuItem>
              <MenuItem value={4}>S4</MenuItem>
              <MenuItem value={5}>S5</MenuItem>
              <MenuItem value={6}>S6</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel>Stream</InputLabel>
            <Select
              value={Fullname.stream}
              label="stream"
              name="stream"
              onChange={handleChange}
            >
              <MenuItem value={'a'}>A</MenuItem>
              <MenuItem value={'b'}>B</MenuItem>
              <MenuItem value={'c'}>C</MenuItem>
              <MenuItem value={'d'}>D</MenuItem>
            </Select>
          </FormControl>
        </Container>
      </div>
      <div>
        <Container>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel>Subject</InputLabel>
            <Select
              value={Fullname.subject}
              label="Subject"
              name="subject"
              onChange={handleChange}
            >
              <MenuItem value={'bio'}>Biology</MenuItem>
              <MenuItem value={'phy'}>Pyhsics</MenuItem>
              <MenuItem value={'mth'}>Maths</MenuItem>
              <MenuItem value={'che'}>Chemistry</MenuItem>
              <MenuItem value={'his'}>History</MenuItem>
              <MenuItem value={'econ'}>Economics</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel>Teacher</InputLabel>
            <Select
              value={Fullname.teacher}
              label="Teacher"
              name="teacher"
              onChange={handleChange}
            >
              <MenuItem value={'john'}>Mr.John</MenuItem>
              <MenuItem value={'doe'}>Mrs.Doe</MenuItem>
              <MenuItem value={'smith'}>Mr.Smith</MenuItem>
              <MenuItem value={'faridah'}>mrs.Faridah</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel>From</InputLabel>
            <Select
              value={Fullname.from}
              label="From"
              name="from"
              onChange={handleChange}
            >
              <MenuItem value={8}>8:00</MenuItem>
              <MenuItem value={9}>9:00</MenuItem>
              <MenuItem value={10}>10:00</MenuItem>
              <MenuItem value={11}>11:00</MenuItem>
              <MenuItem value={12}>12:00</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel>To</InputLabel>
            <Select
              value={Fullname.to}
              label="To"
              name="to"
              onChange={handleChange}
            >
              <MenuItem value={'9'}>9:00</MenuItem>
              <MenuItem value={'10'}>10:00</MenuItem>
              <MenuItem value={'11'}>11:00</MenuItem>
              <MenuItem value={'12'}>12:00</MenuItem>
              <MenuItem value={'1'}>1:00</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel>Room</InputLabel>
            <Select
              value={Fullname.room}
              label="Room"
              name="room"
              onChange={handleChange}
            >
              <MenuItem value={'amule'}>Amule</MenuItem>
              <MenuItem value={'block_1'}>Block 1</MenuItem>
              <MenuItem value={'chem_lab'}>Chem lab</MenuItem>
              <MenuItem value={'design_hub'}>Design hub</MenuItem>
            </Select>
          </FormControl>
        </Container>
      </div>
      <div>
        <Container>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="web">Monday</ToggleButton>
            <ToggleButton value="android">Tuesday</ToggleButton>
            <ToggleButton value="ios">Wednesday</ToggleButton>
            <ToggleButton value="web">Thursday</ToggleButton>
            <ToggleButton value="android">Friday</ToggleButton>
          </ToggleButtonGroup>
        </Container>
        <div>
          <Container>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 550 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Teacher</TableCell>
                    <TableCell align="right">Subject</TableCell>
                    <TableCell align="right">From</TableCell>
                    <TableCell align="right">To</TableCell>
                    <TableCell align="right">Room</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.subject}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.subject}
                      </TableCell>
                      <TableCell align="right">{row.teacher}</TableCell>
                      <TableCell align="right">{row.From}</TableCell>
                      <TableCell align="right">{row.To}</TableCell>
                      <TableCell align="right">{row.Room}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Manage;
