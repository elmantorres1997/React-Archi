import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import FormList from "./app/pages/item/FormList"
import List from "./app/pages/item/List";
import items from "./app/pages/item/Todo.reducers"

// Setup Redux store with Thunks
const reducers = combineReducers({ items })
const store = createStore(reducers, applyMiddleware(thunk))
window.store = store


const App = () => (
    <Provider store={store}>
        <List/>
        <FormList />
    </Provider>
    
)

export default App
