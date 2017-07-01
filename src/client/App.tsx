import * as React from 'react';
import { HashRouter } from 'react-router-dom';

import Index from './pages/Index';

const App = () =>
  <HashRouter>
    <Index />
  </HashRouter>;

export default App;
