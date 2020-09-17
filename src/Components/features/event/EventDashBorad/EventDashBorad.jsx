import React, { Component } from 'react';
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';

const mapState = (state) =>( {
  events : state.events
})


class EventDashBroad extends Component {

  state={
    isOpen : false,
    selectedEvent : null
  }


  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    })
  }

  handleFormCancel = () => {
    this.setState({
      isOpen : false
    })
  }

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = './assets/images/user.png'

    this.setState( ({events}) => (  {
      events: [...events , newEvent],
      isOpen : false
    }))
  }

  handleSelectEvent = (event) => {
    this.setState({
      selectedEvent : event,
      isOpen: true
    })
  }

  handleUpdateEvent = (updateEvent) => {
    this.setState( ({events}) => ({
      events : events.map(event => {
        if(event.id === updateEvent.id){
          return {...updateEvent}
        }else{
          return event 
        }
      }),
      isOpen : false,
      selectedEvent : null
    }))
  }

  handleDeleteEvent = (id)=> {
    this.setState(({events}) => ({
      events : events.filter(e => e.id !== id) 
      
    }))
  }

  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;

    return (
      <Grid>
        <GridColumn width={10}>
          <EventList 
          deleteEvent = {this.handleDeleteEvent}
          events={events} 
          selectEvent = {this.handleSelectEvent} />
        </GridColumn> 
        <GridColumn width={6} >
          <Button
          onClick={this.handleFormOpen}
            basic 
            color='blue'
          content='Create Event'
          />
          {isOpen && <EventForm 
          key={selectedEvent ? selectedEvent.id : 0 }
          updateEvent = {this.handleUpdateEvent}
          selectEvent = {selectedEvent}
          createEvent ={this.handleCreateEvent}
          cancelFormOpen={this.handleFormCancel} />}
        </GridColumn>
      </Grid>
    )
  }
}

export default connect(mapState)(EventDashBroad);