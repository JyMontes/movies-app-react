import { context } from './AppContext';
import { AppState, PropsProvider } from '../interface/interfaces'

const state: AppState = {
    name:'Black Widow',
    url:'http://marvel.io/bw',
    time:'2 horas'
}

export const AppProvider = ( { children }: PropsProvider ) => {
    return(
        <context.Provider value={{ state }}>
            { children }
        </context.Provider>
    )
}