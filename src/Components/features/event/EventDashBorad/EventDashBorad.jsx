import React, { Component } from 'react';
import {Grid, GridColumn, Button} from 'semantic-ui-react'
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';




const eventsFormDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2020-08-20',
    category: 'culture',
    description:
      'Lorem ipsum dolor stamen, connecter dehiscing elia. Phaseouts solicitude ligula eu leo incidents, quia scelerisque magna paribus. Sed egest ipsum vel arch vesicular ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2020-08-20',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amen,  connecter dehiscing elia.Phaseouts solicitude ligula eu leo incidents, quia scelerisque magna paribus. Sed egest ipsum vel arch vesicular ullamcorper',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]
class EventDashBroad extends Component {

  state={
    events : eventsFormDashboard,
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
    const { events , isOpen , selectedEvent}= this.state

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

export default  EventDashBroad;