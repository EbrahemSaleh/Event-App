import React, { Fragment } from 'react'
import { Item, Label, Segment } from 'semantic-ui-react'

 const  EventDetailedSidebar = ()  => {
  return (
    <div>
       <Fragment>
         <Segment
           textAlign='center'
           style={{ border: 'none' }}
           attached='top'
           secondary
           inverted
           color='teal'
         >
           2 People Going
         </Segment>
         <Segment attached>
           <Item.Group divided>
             <Item style={{ position: 'relative' }}>
               <Label
                 style={{ position: 'absolute' }}
                 color='orange'
                 ribbon='right'
               >
                 Host
               </Label>
               <Item.Image size='tiny' src='/assets/images/user.png' />
               <Item.Content verticalAlign='middle'>
                 <Item.Header as='h3'>Attendee Name</Item.Header>
               </Item.Content>
             </Item>
           </Item.Group>
         </Segment>
       </Fragment> 
    </div>
  )
}


export default EventDetailedSidebar