import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link , withRouter } from 'react-router-dom';
import SignedOutMenu from '../menus/SignedOutMenu';
import SignedInMenu from '../menus/SignedInMenu';

 class NavBar extends Component {

  state={
    authenticated : false
  }

   handleSignIn = () => this.setState({ authenticated: true })
   handleSignOut = () =>{
      this.setState({ authenticated: false })
      this.props.history.push('/')
    }

  render() {
    const {authenticated} = this.state
    return (
           <Menu inverted fixed="top">
             <Container>
               <Menu.Item as={NavLink} to="/" header>
                 <img src="assets/images/logo.png" alt="logo" />
                 Re-vents
               </Menu.Item>
          <Menu.Item as={NavLink} to='/events' name="Events" />
          <Menu.Item as={NavLink} to='/people' name="People" />
          <Menu.Item as={NavLink} to='/test' name="Test" />
               <Menu.Item>
                 <Button 
                 as={Link}
                 to="/createEvent"
                 floated="right"  inverted content="Create Event" />
               </Menu.Item>
               { authenticated ? ( <SignedInMenu  signOut={this.handleSignOut}  />) : 
            (<SignedOutMenu signIn={this.handleSignIn} signOut={this.handleSignOut} />) }
             </Container>
           </Menu>
    )
  }
}

export default withRouter(NavBar)