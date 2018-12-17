import React from 'react';
import ReduxProvider from './app/redux/ReduxProvider.js'

export default class App extends React.Component {
  render() {
    return (
      <ReduxProvider/>
    );
  }
}


