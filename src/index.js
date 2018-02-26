import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { headerNode } from '../../test-task-form/src/nodes/headerNode.js';

headerNode();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
