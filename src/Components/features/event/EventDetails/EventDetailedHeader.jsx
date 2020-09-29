import React from 'react'
import { Button, Header, Item, Segment , Image } from 'semantic-ui-react'


const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const  EventDetailedHeader = () =>  {
  return (
       <Segment.Group>
          <Segment basic attached="top" >
            <Image src="/assets/categoryImages/drinks.jpg" fluid  style={ eventImageStyle }/>
    
            <Segment basic style={ eventImageTextStyle }>
              <Item.Group>
                <Item>
                  <Item.Content>
                    <Header
                      size="huge"
                      content="Event Title"
                      style={{ color: 'white' }}
                    />
                    <p>Event Date</p>
                    <p>
                      Hosted by <strong>Hosted by</strong>
                    </p>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
          </Segment>
    
          <Segment attached="bottom">
            <Button color="grey" basic>Cancel My Place</Button>
            <Button color="teal" basic>JOIN THIS EVENT</Button>
    
            <Button color="orange"  basic floated="right">
              Manage Event
            </Button>
          </Segment>
        </Segment.Group>
  )
}

export default EventDetailedHeader
