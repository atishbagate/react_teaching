import React from 'react'

// import HomeContainer from './App.js/Container/HomeContainer'
import Home from './App.js/Components/Home'
import './Apps.css'
//for redux imports 
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import rootReducer from './App.js/Services/Reducers/Index'
const store = createStore(rootReducer)
console.log("store data inside Apps file = ",store);
function Apps() {
    return (
        <>
        <h2>this is inside App for Folder Structure.</h2>
        <Provider store={store} >
        <Home />
        </Provider>
        </>
    )
}
export default Apps;