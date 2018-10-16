import {toastr} from 'react-redux-toastr'
import {CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENT} from '../actionsType'
import  {AsyncActionStart, AsyncActionFinished, AsyncActionError} from '../../../Async/AsyncActionCreator'
import {fetchSampleData} from '../../../Data/MockApi'



export const fetchEvents = (events) => {
    return {
         type:FETCH_EVENT,
         payload:events
    }

}

export const loadEvents = () => {

    return async dispatch => {
   try {
        dispatch(AsyncActionStart())
        let events = await fetchSampleData();
        dispatch(fetchEvents(events))
        dispatch(AsyncActionFinished())
   }
   catch (error) {
       console.log(error);
       dispatch(AsyncActionError())

   }


    }

}


export const createEvent = (event) => {
     return async  dispatch => {
         try {
             dispatch( {
                type:CREATE_EVENT,
                payload:{
                    event
                }
             })

             toastr.success('Success!', 'Event has been created')
            
         }
         catch(error) {
             toastr.error('Error !', 'Something Went Wrong ')
         }
     }
}

export const updateEvent = (event) => {
    return async  dispatch => {
        try {
            dispatch( {
               type:UPDATE_EVENT,
               payload:{
                   event
               }
            })

            toastr.success('Success!', 'Event has been Updated')
           
        }
        catch(error) {
            toastr.error('Error !', 'Something Went Wrong ')
        }
    }
}

export const deleteEvent = (eventId) => {
    return {
        type:DELETE_EVENT,
        payload:{
            eventId
        }
    }
}