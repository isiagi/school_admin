import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import Nav from './Nav';
import Left from './Left';
import Student from './Student';
import Parents from './Parents';
import Teachers from './Teacher';
import Events from './Events';
import { AppContext } from './Context';
import Admin from './Admin';
import Manage from './timetable/Manage';
// import {} from 'react-r'

//0784857447

function Index() {
  const [view] = useContext(AppContext);
  return (
    <>
      <Nav />
      <Grid container>
        <Grid item sm={2}>
          <Left />
        </Grid>
        <Grid item sm={10}>
          {(() => {
            switch (view) {
              case 'admin':
                return <Admin />;
              case 'student':
                return <Student />;
              case 'teacher':
                return <Teachers />;
              case 'parent':
                return <Parents />;
              case 'event':
                return <Events />;
              case 'time':
                return <Manage />;
              default:
                return <Admin />;
            }
          })()}
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
