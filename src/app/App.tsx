import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import './styles.css';
import Demo from './demo';

export const App = hot(() => (
  <div className="app">
    <Demo />
  </div>
));
