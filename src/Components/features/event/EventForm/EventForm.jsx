import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';


class EventForm extends Component {
  state ={
    title : '',
    date: '',
    city:'',
    venue:'',
    hostedBy : ''
  }

  componentDidMount(){
    if (this.props.selectEvent  !== null){
      this.setState({
        ...this.props.selectEvent
      })
    }
  }

  handleFormSubmit = (e) =>{
    e.preventDefault();
    if(this.state.id){
      this.props.updateEvent(this.state)
    }else{
      this.props.createEvent(this.state)
}
  }

  handleFormChange =({target : {name , value}}) => {
    this.setState({
     [name] : value
    })
  }

  render() {
    const { cancelFormOpen } = this.props;
    const {title , date , city , venue , hostedBy} = this.state;
    return (
            <Segment>
              <Form onSubmit={this.handleFormSubmit} autoComplete = 'off'>
                <Form.Field>
                  <label>Event Title</label>
                  <input  
                  name="title"
                  onChange={this.handleFormChange}
                  value={title} 
                  placeholder="Event Title" />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input
              name="date"
              onChange={this.handleFormChange}
              value={date} 
                   type="date" 
                   placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input 
                   name="city"
                  onChange={this.handleFormChange}
                   value={city} 
                  placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input
              name="venue"
              onChange={this.handleFormChange}
              value={venue} 
                  placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input
              name="hostedBy"
              onChange={this.handleFormChange}
              value={hostedBy} 
                  placeholder="Enter the name of person hosting" />
                </Form.Field>
          <Button basic color='blue' type="submit">
                  Submit
                </Button>
          <Button onClick={cancelFormOpen} type="button" basic color='grey'>Cancel</Button>
              </Form>
            </Segment>
    )
  }
}

export default  EventForm
