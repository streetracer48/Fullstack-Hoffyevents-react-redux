import React, { Component } from 'react';
import { Button, Container  } from 'semantic-ui-react';
import {Route} from 'react-router-dom';
import NavBar from '../feature/Nav/Navbar/';
import Home from '../feature/Home';
import EventDashboard from '../feature/event/eventDashboard'
import EventDetailedPage  from '../feature/event/eventDetailed'
import PeopleDashboard from '../feature/user/PeopleDashboard';
import UserDetailed from '../feature/user/userDetailed';
import EventForm from '../feature/event/eventForm';
import SettingsDashboard from '../feature/user/Settings/settingsDashboard'

class App extends Component {
  render() {

    return (
      <div>
      <NavBar/>
      <Container className="main">
        <Route exact path='/' component={Home} />
        <Route path='/events' component={EventDashboard} />
        <Route path='/events/:id' component={EventDetailedPage} />
        <Route path='/people' component={PeopleDashboard} />
        <Route path='/profile/:id' component={UserDetailed} />
        <Route path='/settings' component={SettingsDashboard} />
        <Route path='/createEvent' component={EventForm} />
      </Container>
      </div>
    );
  }
}

export default App;
