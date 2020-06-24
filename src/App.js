import React, { useEffect, Fragment } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import { AddBtn } from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import { AddTechModal } from './components/techs/AddTechModal';
import { TechListModal } from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';
import Logs from './components/logs/Logs';
import EditLogModal from './components/logs/EditLogModal';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
