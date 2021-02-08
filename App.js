import React from 'react';
import {Provider} from 'react-redux';
import {Text} from 'react-native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/store';


//importar stack

export default ()=>{
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Text>. . .  uhagsydhasjdnaknsd</Text>
    </PersistGate>
  </Provider>
}