import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Chat from './pages/Chat';
import About from './pages/About';
import History from './pages/History';
import BasicLayout from './layouts/Basic';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <BasicLayout>
        <Switch>
          <Route path="/chat" component={Chat} />
          <Route path="/history" component={History} />
          <Route path="/about" component={About} />
          <Redirect path="*" to="/chat" />
        </Switch>
      </BasicLayout>
    </BrowserRouter>
  );
}

export default App;
