import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
  ReactDOM.render(<Tabs />, root);
});
