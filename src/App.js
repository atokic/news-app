import React from 'react';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import { Provider } from 'react-redux';
import News from './containers/News';
import Favorites from './containers/Favorites';
import Layout from "./components/Layout";
import ContentWrapper from "./components/ContentWrapper";
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<ContentWrapper />}>
              <Route path="/:category?" element={<News />} />
              <Route exact path="/news/favorites" element={<Favorites />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;