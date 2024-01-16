// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlotDetail from '../Pages/plotdetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/plot-detail" component={PlotDetail} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
