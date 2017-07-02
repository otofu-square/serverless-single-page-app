import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

if (!location.hash.length) {
  location.hash = '#/';
}

ReactDOM.render(<App />, document.getElementById('root'));
