import React from 'react';
import { ExampleComponent } from '../../components/example';

/**
 * HomeViewProps
 */
interface HomeViewProps {
  text: string;
}

/**
 * HomeView
 */
export const HomeView = ({ text }: HomeViewProps) => (
  <div>
    <ExampleComponent text={text} />
  </div>
);
