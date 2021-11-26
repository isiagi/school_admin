import React from 'react';
import Container from '@mui/material/Container';
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
} from '@syncfusion/ej2-react-schedule';
import { styled } from '@mui/system';

const ContainerWrapper = styled(Container)(({ theme }) => ({
  height: '100vh',
  paddingTop: theme.spacing(9),
}));

const Events = () => {
  return (
    <ContainerWrapper>
      <ScheduleComponent height='550px'  currentView="Month">
        <Inject services={[Day,Week,WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </ContainerWrapper>
  );
};

export default Events;
