import React from 'react';
import Hey from '../Index';
import { Context } from '../Context';

function Home() {
  return (
    <div>
      <Context>
        <Hey />
      </Context>
    </div>
  );
}

export default Home;
