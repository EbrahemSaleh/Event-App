import React , {Component, Fragment} from 'react';
import EventDashBoard from '../../Components/features/event/EventDashBorad/EventDashBorad' ;
import Navbar from '../../Components/nav/Navbar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../Components/features/home/HomePage';
import PeopleDashboard from '../../Components/features/User/peopleDashborad/PeopleDashborad';
import EventDetailedPage from '../../Components/features/event/EventDetails/EventDetailedPage';
import UserDetailedPage from '../../Components/features/User/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../Components/features/User/settings/SettingsDashborad'
import EventForm from '../../Components/features/event/EventForm/EventForm';
import TestArea from '../../Components/testarea/textarea';





class App extends Component {
  render(){
 return ( 

  <Fragment>
     <Route exact path='/' component={HomePage} />
     <Route 
     path='/(.+)' 
     render={() => (
       <Fragment>
         <Navbar />
         <Container className="main">
           <Route path='/events' component={EventDashBoard} />
           <Route path='/events/:id' component={EventDetailedPage} />
           <Route path='/people' component={PeopleDashboard} />
           <Route path='/profile/:id' component={UserDetailedPage} />
           <Route path='/settings' component={SettingsDashboard} />
           <Route path="/createEvent" component={EventForm} />
           <Route path="/test" component={TestArea} />
        
         </Container>
       </Fragment>
     )}
     />
  </Fragment>
 

  )
  }
 
}

export default App;
