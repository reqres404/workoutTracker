import {WorkoutsContext} from '../context/WorkoutsContext'
import { useContext } from 'react'

export const useWorkoutsContext =()=>{
    const context = useContext(WorkoutsContext);
    
    if(!context){
        throw Error("useWorkoutContext must be inside WorKoutContextProvider")
    }

    return context
}