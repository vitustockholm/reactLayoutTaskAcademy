import React from 'react';
import Content from '../Content';
import SignUp from '../SignUp';
import Feature from '../Feature';

import './Main.css';

const Main = () => {
  return (
    <main>
      <Content />
      <SignUp />
      <Feature background='ft-bg-orange' />
      <Feature background='ft-bg-red' />
      <Feature background='ft-bg-purple' />
    </main>
  );
};

export default Main;
