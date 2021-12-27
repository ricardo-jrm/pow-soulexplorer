import React from 'react';
import type { NextPage } from 'next';
import { HomeView } from '../containers/example';

export const HomePage: NextPage = () => (
  <HomeView text="Hello World from Nebula" />
);

export default HomePage;
