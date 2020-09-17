import { createReducer } from '../../../app/common/util/reducerUtils';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventTypes';


const initialState = [
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
  



const createEvent = (state , payload) => {
return [...state , payload]
}


const updateEvent = (state, payload) => {
    return [
        ...state.filter(event => event.id !== payload.event.id) , payload
    ]
}

const deleteEvent = (state, payload) => {
    return [
        ...state.filter(event => event.id !== payload.eventId)
    ]
}


export default createReducer(initialState, {
    [CREATE_EVENT]: createEvent,
    [UPDATE_EVENT]: updateEvent,
    [DELETE_EVENT]: deleteEvent
})

